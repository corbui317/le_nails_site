import React from "react";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";
import imgMani from "../assets/gallery/nails1.jpg";
import imgPedi from "../assets/gallery/2.jpg";
import imgEnhance from "../assets/gallery/3.jpg";
import imgOther from "../assets/gallery/4.jpg";
import imgLash from "../assets/gallery/5.jpg";
import imgWax from "../assets/gallery/6.jpg";

const serviceCategories = [
  {
    title: "Manicure",
    image: imgMani,
    items: [
      { name: "Classic Manicure", price: "$25" },
      { name: "Gel Manicure", price: "$38" },
      { name: "Russian Manicure", price: "$75" },
      { name: "Gel Manicure w/French", price: "$45" },
      { name: "Gel Manicure w/Paraffin", price: "$45" },
      { name: "Hand Gel Polish Change", price: "$25" },
      { name: "Builder Base", price: "$50" },
    ],
  },
  {
    title: "Pedicure",
    image: imgPedi,
    items: [
      {
        name: "Classic Pedicure (with Gel $50)",
        price: "$35",
        desc: "This is the traditional pedicure in which we use a whirlpool spa chair to enhance the therapeutic benefit of water therapy and essential sea salts. This pedicure includes shaping of the toenails and trimming of the cuticles. Lotion and hot towels are applied with a light massage. Followed by a polish color of your choice.",
      },
      {
        name: "Callus Pedicure (with Gel $55)",
        price: "$40",
        desc: "This pedicure has all the cleaning steps as the classic pedicure except we use a special chemical to break down the thick calluses that build up around your heels and at the bottom of your feet over time. This chemical, when applied, helps soften the dead tissue and helps remove the unwanted callus growth. This treatment is perfect for someone who has dry feet and cracked heels. One treatment might not completely remove all the calluses. It is recommended at least 3-4 consecutive treatments for the calluses to go away.",
      },
      {
        name: "Deluxe Pedicure (with Gel $60)",
        price: "$45",
        desc: "Relieve your tension by relaxing in our whirlpool massage chair while your feet are pampered with a warm bubble bath. We will shape out your toe nails and trim your cuticles. A sugar scrub is applied to remove dead skin followed by a marine mask wrap that has a tingling and refreshing sensation. This will help relieve minor aches and pains of the heels and muscles. This pedicure is complete with a massage of the calves and feet with our soothing lotion, finish with any polish of your choice.",
      },
      {
        name: "Deluxe Aroma Pedicure (with Gel $75)",
        price: "$60",
        desc: "Pamper, relax and rejuvenate yourself with this 4 in 1 treatment that includes bomb spa and jojoba beads scrub to exfoliate your dead skin. Followed by collagen mask treatment which rejuvenates and moisturizes your skin. Massage cream will follow to moisturize the rough areas of the skin and promote soften skin. Hot stones will be used to do some massage.",
      },
      {
        name: "Sport Pedicure (with Gel $75)",
        price: "$60",
        desc: "This pedicure incorporates all the basic components of a pedicure. Combined with a cooling anti-inflammatory gel called bio-freeze. It will relieve aches and pains while eliminating excess fluids. It also helps aid with discomfort and swelling of the heels and ankles. We finish up with feet indulged and wrapped in a warm steamed towel. Hot stones will be used to do some massages.",
      },
      {
        name: "Organic Deluxe Pedicure (with Gel $75)",
        price: "$60",
        desc: "Pamper your feet with this one of a kind pedicure that leaves your feet feeling refreshed and rejuvenated. We use all the organic ingredients in this pedicure. The invigorating extracts and antioxidant vitamins leave your feet glowing while the natural enzymes help seal in moisture. This pedicure is complete with a massage of the calves and feet with our soothing lotion, finish with any polish of your choice.",
      },
    ],
  },
  {
    title: "Nail Enhancements",
    image: imgEnhance,
    items: [
      { name: "Acrylic Full Set (Reg. Polish)", price: "$45" },
      { name: "Acrylic Fill (Reg. Polish)", price: "$35" },
      { name: "Fill (Gel)", price: "$50+" },
      { name: "Full Set (Gel)", price: "$60" },
      { name: "Pink Fill", price: "$45" },
      { name: "Pink/White Set", price: "$65" },
      { name: "Hybrid Full Set", price: "$65" },
      { name: "Hybrid Fill (Gel)", price: "$50" },
      { name: "Ombre Pink/White Full Set", price: "$70" },
      { name: "Ombre Pink/White Fill", price: "$50" },
      { name: "Gel-X New Set", price: "$65" },
      { name: "Gel-X Fill", price: "$60" },
      { name: "Sculpture Nail Set", price: "$70" },
      { name: "Sculpture Nail Fill", price: "$50" },
      { name: "Builder Gel Full Set", price: "$65" },
      { name: "Builder Gel Fill", price: "$60" },
    ],
  },
  {
    title: "Others",
    image: imgOther,
    items: [
      { name: "Nail Repair", price: "$10" },
      { name: "Gel Polish Change Hand", price: "$25" },
      { name: "Regular Polish Change Hands", price: "$18+" },
      { name: "Regular Polish Change Toes", price: "$20" },
      { name: "Acrylic/Gel Removal", price: "$15" },
      { name: "Nail Trim", price: "$5" },
      { name: "Cut Down/Reshape", price: "$10" },
      { name: "Regular French", price: "$5" },
      { name: "Deep French", price: "$15+" },
    ],
  },
  {
    title: "Lash Extensions",
    image: imgLash,
    items: [
      { name: "Lash Removal", price: "$15" },
      { name: "Cluster Lash", price: "$45" },
      { name: "Initial Set", price: "$95" },
      { name: "Mink Clusters", price: "$55" },
      { name: "Customized Clusters", price: "$65" },
      { name: "Lash Lift with Tint", price: "$85" },
      { name: "Mega Volume", price: "$175" },
      { name: "Classic Lash", price: "$130" },
      { name: "Hybrid Set", price: "$130" },
    ],
  },
  {
    title: "Waxing",
    image: imgWax,
    items: [
      { name: "Brows", price: "$12" },
      { name: "Lips", price: "$9" },
      { name: "Chin", price: "$9" },
      { name: "Sides", price: "$15" },
      { name: "Full Face", price: "$40" },
      { name: "Under Arms", price: "$30" },
      { name: "Half Arms", price: "$35" },
      { name: "Full Arms", price: "$50" },
      { name: "Full Legs", price: "$70" },
    ],
  },
];

export default function Services() {
  const fadeRef = useFadeInOnScroll();
  return (
    <section
      id="services"
      ref={fadeRef}
      className="p-4 md:p-8 bg-accent opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-8 text-center text-primary">
        Our Services
      </h3>
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {serviceCategories.map((cat, idx) => (
          <div
            key={cat.title}
            className="bg-white/90 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-10 border border-primary/20"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-56 h-56 object-cover rounded-lg shadow-md mb-4 md:mb-0"
            />
            <div className="flex-1 w-full">
              <h4 className="text-2xl font-bold text-primary mb-4 text-center md:text-left">
                {cat.title}
              </h4>
              <ul className="divide-y divide-primary/20">
                {cat.items.map((item, i) => (
                  <li
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between py-3 px-2 md:px-4"
                  >
                    <div>
                      <span className="font-medium text-lg text-gray-800">
                        {item.name}
                      </span>
                      {item.desc && (
                        <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="text-base font-semibold bg-primary/80 text-white rounded px-4 py-1 mt-2 md:mt-0 min-w-[60px] text-center">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
