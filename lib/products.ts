export interface Product {
    id: number;
    slug: string;
    name: string;
    volume: string;
    price: string;
    image: string;
    badge?: string;
    features: string[];
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        slug: 'nanoplastia-1000ml',
        name: 'Bayzilian Nanoplastia',
        volume: '1000ml',
        price: '₹21,999',
        image: '/product-1.jpg',
        badge: 'Bestseller',
        features: [
            'One Step Hair Rebuilder',
            '100% Formaldehyde Free',
            'Up to 100% Straight Results',
            '65–70 Wash Durability',
            'No Color Fading'
        ],
        description: 'Our flagship Nanoplastia treatment is an innovative hair restoration system that deeply rebuilds the hair fiber. Formulated with organic acids and acai berry extracts, it provides long-lasting straightness, incredible shine, and silkiness without any harsh chemicals.',
    },
    {
        id: 2,
        slug: 'pro-botos-1000ml',
        name: 'Bayzilian Pro Botos',
        volume: '1000ml',
        price: '₹24,999',
        image: '/product-2.jpg',
        badge: 'Premium',
        features: [
            'Deep Internal Repair',
            'Non-Straightening Formula',
            'Frizz Elimination & Shine',
            'Increased Volume & Fullness',
            'Chemical-Free Formula'
        ],
        description: 'Pro Botos (Botox) is a revolutionary capillary mass replenishing treatment. It fills the gaps in the hair fiber caused by chemical damage and aging, restoring vitality, strength, and elasticity to all hair types.',
    },
    {
        id: 3,
        slug: 'serum-illuminator',
        name: 'Serum Illuminator',
        volume: '200ml',
        price: '₹1,999',
        image: '/product-3.jpg',
        badge: 'Protector',
        features: [
            'Heat Protection',
            'Anti-Frizz',
            'Anti-Breakage',
            'Restores Elasticity',
            'High Shine Finish'
        ],
        description: 'A lightweight heat protector and styling serum that adds instant luminosity to your hair. It shields the hair from thermal damage while sealing the cuticle for a frizz-free, high-gloss finish.',
    },
    {
        id: 4,
        slug: 'bayzilian-shampoo',
        name: 'Bayzilian Shampoo',
        volume: '1000ml / 300ml',
        price: '₹2,999 / ₹1,199',
        image: '/product-4.jpg',
        badge: 'Essential',
        features: [
            'Sulfate Free',
            'Retains Moisture',
            'For All Hair Treatments',
            'Gentle Cleansing',
            'Professional Grade'
        ],
        description: 'A gentle, sulfate-free cleansing formula specifically designed to maintain the results of Nanoplastia and other professional treatments. It cleanses without stripping natural oils or treatment proteins.',
    },
    {
        id: 5,
        slug: 'bayzilian-conditioner',
        name: 'Bayzilian Conditioner',
        volume: '1000ml / 300ml',
        price: '₹2,999 / ₹1,199',
        image: '/product-5.jpg',
        badge: 'Maintenance',
        features: [
            'Maintains Nanoplastia Results',
            'Sulfate Free',
            'Smooth & Shine',
            'Deep Conditioning',
            'Sustainable Results'
        ],
        description: 'The perfect companion to our professional treatments. This rich conditioner deeply hydrates and seals the hair cuticle, ensuring your results remain smooth, shiny, and manageable for longer.',
    },
    {
        id: 6,
        slug: 'golden-hair-spa',
        name: 'Golden Hair Spa',
        volume: '500gm',
        price: '₹2,099',
        image: '/product-6.jpg',
        badge: 'Luxury',
        features: [
            'Luxury Nourishing Treatment',
            'Restores Shine',
            'For All Hair Types',
            'Rich Hydration',
            'Weekly Treatment'
        ],
        description: 'An ultra-nourishing hair spa mask infused with precious oils and proteins. It provides a deep surge of moisture to dry, damaged hair, restoring its natural shine and softness.',
    },
    {
        id: 7,
        slug: 'argan-oil',
        name: 'Argan Oil',
        volume: '50ml',
        price: '₹1,499',
        image: '/product-7.jpg',
        badge: 'Classic',
        features: [
            'Pure Argan Extract',
            'Intense Hydration',
            'Split End Repair',
            'UV Protection',
            'Lightweight Formula'
        ],
        description: 'Premium Moroccan Argan Oil that absorbs instantly into the hair without leaving any greasy residue. It nourishes, smooths, and protects hair from environmental stressors.',
    },
    {
        id: 8,
        slug: 'clarifying-shampoo',
        name: 'Clarifying Shampoo',
        volume: '1000ml',
        price: '₹1,599',
        image: '/product-8.jpg',
        badge: 'Technical',
        features: [
            'Deep Cleansing',
            'Opens Hair Cuticles',
            'Removes Build-up',
            'Pre-Treatment Essential',
            'Professional Use Only'
        ],
        description: 'A high-performance clarifying shampoo designed to prepare the hair for professional treatments. It effectively removes product build-up and minerals, ensuring maximum treatment absorption.',
    },
];
