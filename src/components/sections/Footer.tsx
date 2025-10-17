import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                    <Image
                        src="/logo-transparent.webp"
                        alt="Crveni križ Buje"
                        width={128}
                        height={128}
                    />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                    Hrvatski Crveni Križ - Gradsko društvo Crvenog križa Buje
                </h3>
                <p className="text-gray-300 mb-6">
                    Spašavamo živote zajedno - jedna kap krvi po kap
                </p>
                <div className="border-t border-gray-800 pt-6">
                    <p className="text-gray-400 text-sm">
                        © 2025 Hrvatski Crveni križ - Gradsko društvo Crvenog
                        križa Buje. Sva prava pridržana.
                    </p>
                </div>
            </div>
        </footer>
    );
}
