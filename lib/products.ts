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
        name: 'Bayzilian Nanoplastia (With Nanotechnology)',
        volume: '1000ml',
        price: '21,999',
        image: '/Nanoplastia.png',
        badge: 'Bestseller',
        features: [
            'One Step Hair Rebuilder',
            '100% Formaldehyde Free',
            'Up to 100% Straight Results',
            '65–70 Wash Durability',
            'No Color Fading',
            'Intra-cellular Hair Repair',
            'No Strong Smell or Irritation',
            'Same Day Wash & Color'
        ],
        description: 'Our flagship Nanoplastia treatment is an innovative hair restoration system that deeply rebuilds the hair fiber. Formulated with organic acids and acai berry extracts, it provides long-lasting straightness, incredible shine, and silkiness without any harsh chemicals. Bayzilian Nanoplastia Number 01 Smoothing Treatment is a professional hair-rebuilding treatment designed to smooth, repair, and strengthen hair using advanced nanotechnology. The formula penetrates deep into the hair fiber to repair internal damage and restore elasticity, resulting in smoother, shinier, healthier hair.',
    },
    {
        id: 2,
        slug: 'pro-botos-1000ml',
        name: 'Bayzilian Pro Botos (Botox Treatment)',
        volume: '1000ml',
        price: '24,999',
        image: '/Pro Botos.png',
        badge: 'Premium',
        features: [
            'Deep Internal Repair',
            'Non-Straightening Formula',
            'Frizz Elimination & Shine',
            'Increased Volume & Fullness',
            'Chemical-Free Formula'
        ],
        description: 'Pro Botos (Botox) is a revolutionary capillary mass replenishing treatment. It fills the gaps in the hair fiber caused by chemical damage and aging, restoring vitality, strength, and elasticity to all hair types. Bayzilian Pro Botos Hair Treatment is a deep-conditioning and repair treatment designed to revitalize dull, damaged, and frizzy hair. Despite the name, it does not contain botulinum toxin. The name refers to its ability to fill damaged hair fibers and restore the hair structure. This treatment works like a filler for hair, smoothing the cuticle and improving texture while restoring strength and shine.',
    },
    {
        id: 3,
        slug: 'bayzilian-serum',
        name: 'Bayzilian Hair Serum',
        volume: '200ml',
        price: '1,099',
        image: '/Serum.png',
        badge: 'Protector',
        features: [
            'Heat Protection',
            'Anti-Frizz',
            'Anti-Breakage',
            'Restores Elasticity',
            'High Shine Finish',
            'Immediate Chemical Damage Relief'
        ],
        description: 'A lightweight heat protector and styling serum that adds instant luminosity to your hair. It shields the hair from thermal damage while sealing the cuticle for a frizz-free, high-gloss finish. Bayzilian Serum Illuminator is a multifunctional professional hair serum designed to protect hair from heat damage while restoring shine, softness, and strength. It is particularly useful for hair that has been chemically treated through coloring, bleaching, or straightening.',
    },
    {
        id: 4,
        slug: 'bayzilian-shampoo',
        name: 'Bayzilian Shampoo',
        volume: '1000ml / 300ml',
        price: '2,999 / 1,199',
        image: '/Shampoo.png',
        badge: 'Essential',
        features: [
            'Sulfate Free',
            'Retains Moisture',
            'For All Hair Treatments',
            'Gentle Cleansing',
            'Professional Grade'
        ],
        description: 'A gentle, sulfate-free cleansing formula specifically designed to maintain the results of Nanoplastia and other professional treatments. It cleanses without stripping natural oils or treatment proteins. Bayzilian Shampoo is a sulfate-free professional shampoo designed to gently cleanse the hair while maintaining moisture balance. It is suitable for use after professional hair treatments such as nanoplastia.',
    },
    {
        id: 5,
        slug: 'bayzilian-conditioner',
        name: 'Bayzilian Conditioner',
        volume: '1000ml / 300ml',
        price: '2,999 / 1,199',
        image: '/Conditioner.png',
        badge: 'Maintenance',
        features: [
            'Maintains Nanoplastia Results',
            'Sulfate Free',
            'Smooth & Shine',
            'Deep Conditioning',
            'Sustainable Results'
        ],
        description: 'The perfect companion to our professional treatments. This rich conditioner deeply hydrates and seals the hair cuticle, ensuring your results remain smooth, shiny, and manageable for longer. Bayzilian Conditioner is designed to nourish and maintain hair after nanoplastia or other smoothing treatments. It helps prolong treatment results while keeping hair healthy and shiny.',
    },
    {
        id: 6,
        slug: 'golden-hair-spa',
        name: 'Golden Hair Spa',
        volume: '500gm',
        price: '2,099',
        image: '/Golden Hair Spa.png',
        badge: 'Luxury',
        features: [
            'Luxury Nourishing Treatment',
            'Restores Shine',
            'For All Hair Types',
            'Rich Hydration',
            'Weekly Treatment',
            'Deep Scalp Nourishment'
        ],
        description: 'A Golden Hair Spa typically refers to a luxurious hair treatment that focuses on rejuvenating and nourishing the hair and scalp, often using natural ingredients like argan oil, and other essential oils. It often includes steps like steaming, scalp massage, shampooing, and applying hair masks. The goal is to improve hair health, reduce damage, and restore shine. Bayzilian Golden Hair Spa is a luxurious hair treatment designed to rejuvenate hair and scalp. It uses nourishing oils and nutrients to restore shine, softness, and strength to damaged hair.',
    },
    {
        id: 7,
        slug: 'argan-oil',
        name: 'Moroccan Argan Oil',
        volume: '50ml',
        price: '1,599',
        image: '/Argan oil .png',
        badge: 'Classic',
        features: [
            'Pure Argan Extract',
            'Intense Hydration',
            'Split End Repair',
            'UV Protection',
            'Lightweight Formula'
        ],
        description: 'Bayzilian Argan oil is known for its use in hair, skin & Nails products. Beyond cosmetics, it offers health benefits such as immune system support, cholesterol control, potential cancer-fighting properties, anti-aging effects, and wound healing. Research links argan oil to lower LDL cholesterol and better heart health. Bayzilian Argan Oil is a lightweight nourishing oil designed for hair, skin, and nails. It provides deep hydration and improves shine while protecting hair from dryness and damage.',
    },
    {
        id: 8,
        slug: 'clarifying-shampoo',
        name: 'Clarifying Shampoo',
        volume: '1000ml / 100ml',
        price: '1,999',
        image: '/Clarifying Shampoo .png',
        badge: 'Technical',
        features: [
            'Deep Cleansing',
            'Opens Hair Cuticles',
            'Removes Build-up',
            'Pre-Treatment Essential',
            'Professional Use Only'
        ],
        description: 'A high-performance clarifying shampoo designed to prepare the hair for professional treatments. It effectively removes product build-up and minerals, ensuring maximum treatment absorption. Bayzilian Clarifying Shampoo is designed to remove buildup, impurities, and residues from hair and scalp. It prepares the hair for professional treatments.',
    },
    {
        id: 9,
        slug: 'permanent-spa',
        name: 'Permanent Spa',
        volume: '500gm',
        price: '3,999',
        image: '/Permanent Spa.png',
        badge: 'Superfood',
        features: [
            'Deep Hydration',
            'Thicker Appearance',
            'Long-lasting Manageability',
            'Damage Repair',
            'Superfood Nourishment'
        ],
        description: 'Permanent Spa is a superfood for your hair designed to create the appearance of thicker, fuller hair. It infuses moisture deep into the hair shaft, reduces frizz, and enhances shine for days. The formula fortifies hair strands and is rich in essential nutrients for professional-grade hair health. Bayzilian Permanent Spa is an intensive salon hair treatment designed to deeply nourish and repair damaged hair from within. Unlike temporary surface treatments, it works inside the hair structure to improve texture, moisture retention, and strength.',
    },
    {
        id: 10,
        slug: 'serum-illuminator',
        name: 'Bayzilian Serum Illuminator',
        volume: '200ml',
        price: '1,999',
        image: '/illuminator.jpg',
        badge: 'Protector',
        features: [
            'Immediate Chemical Damage Reversal',
            'Treatment + Heat Protector + pH Balancer',
            'Restores Vitality & Elasticity',
            'Anti-Porosity (Seals the cuticle)',
            'Anti-Breakage (Strengthens the structure)',
            'Anti-Frizz + Illuminating Finish'
        ],
        description: 'A highly concentrated, multifunctional serum often marketed as a "chemical reverser" to provide immediate relief and recovery for hair damaged by coloring, bleaching, and straightening. It works as a treatment, a heat protector, and a pH balancer—helping restore the hair’s natural vitality and elasticity while sealing the cuticle (anti-porosity), strengthening the structure (anti-breakage), and smoothing the surface (anti-frizz). Delivers a premium illuminating finish with intense shine, softness, and smoothness without weighing the hair down.',
    }
];
