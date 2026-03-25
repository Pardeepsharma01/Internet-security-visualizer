"use client";
export default function Disclaimer() {
  return (
    <section className="py-10 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          This tool uses publicly available data from Shodan and is intended for
          educational and security research purposes only. Please use responsibly.
        </p>
      </div>
    </section>
  );
}