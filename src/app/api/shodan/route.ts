import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ip = searchParams.get('ip');

  if (!ip) {
    return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
  }

  const apiKey = process.env.SHODAN_API_KEY;
  // console.log("API KEY:", apiKey);

  if (!apiKey) {
    // Return mock data for demonstration if no API key is set
    return NextResponse.json({
      ip_str: ip,
      city: "Cyber City",
      country_name: "Neon Republic",
      org: "Mock ISP Operations",
      os: "Linux",
      hostnames: [`host.${ip.replace(/\./g, '-')}.net`],
      ports: [22, 80, 443, 8080],
      data: [
        { port: 22, transport: 'tcp', product: 'OpenSSH', version: '8.4p1' },
        { port: 80, transport: 'tcp', product: 'nginx', version: '1.18.0' },
        { port: 443, transport: 'tcp', product: 'nginx', version: '1.18.0' },
        { port: 8080, transport: 'tcp', product: 'Apache Tomcat', version: '9.0' }
      ],
      latitude: 35.6895,
      longitude: 139.6917
    });
  }

  try {
    const res = await fetch(`https://api.shodan.io/shodan/host/${ip}?key=${apiKey}`);
    
    if (!res.ok) {
      if (res.status === 404) {
         return NextResponse.json({ error: 'No information available for that IP.' }, { status: 404 });
      }
      throw new Error(`Shodan API responded with status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Shodan API Error:', error);
    return NextResponse.json({ error: 'No data found for this IP. Try a different public IP' }, { status: 500 });
  }
}
