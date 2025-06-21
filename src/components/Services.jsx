import React from "react";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function Services() {
  const fadeRef = useFadeInOnScroll();

  return (
    <section
      id="services"
      ref={fadeRef}
      className="p-8 bg-accent opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-6 text-center text-primary">
        Our Services
      </h3>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <pre className="whitespace-pre-wrap text-sm">
MANICURES
BASIC MANICURE Regular Polish $25 Gel $40
This basic manicure includes a cuticle soak, trimming, shaping, cuticle treatment, light massage, and application

SIGNATURE MANICURE Regular Polish $30 Gel $45
Enhance your express manicure with a sugar scrub exfoliation and collagen mask. Experience the calming effects of essential oil and lotion to relax, relieve pain, and decrease inflammation. Elevate the pampering session with an extra massage, warm towels, and a flawless polish finish.

SPA PEDICURE
Lavender Bliss Pedicure (40 minutes) $55 With Gel (10-min massage) $65
- Sugar scrub exfoliation
- Purifying mud mask
- Hot stone foot massage
- Lavender oil massage
- Hot towel wrap
Benefits: Relaxes muscles, relieves tension, promotes restful sleep, boosts immunity, manages pain, and aids in detoxification.

Coffee Cappuccino Pedicure (40 minutes) $60 With Gel (10-min massage, 2 drink limit) $70
- Detoxing Coffee Soak: Reduces swelling and inflammation
- Exfoliating Coffee Sugar Scrub: Stimulates circulation and removes dead skin
- Nourishing Coffee Mask: Brightens and evens skin tone
- Coffee-Infused Lotion Massage: Relaxes and deeply moisturizes

Milk & Honey Pedicure (50 minutes) $70 With Gel (15-min massage, 2 drink limit) $80
- Organic milk bath with Pink Himalayan salt
- Milk & honey sugar scrub
- Honey foot rinse & hydrating mud masque
- Organic milk lotion application
- Deep tissue hot stone massage with warm towels
- Experience: Baby-soft skin and total relaxation

Jelly Pedicure (55 minutes) $75 With Gel (15-min massage, 2 drink limit) $85
- Jelly spa soak with melting minerals
- Sugar scrub, collagen mask, and hot towel wrap
- Paraffin wax treatment
- Hot stone massage
- Feel: Deep moisture, stress relief, and silky-soft feet

Wine & Rose Pedicure (50 minutes) $75 With Gel (15-min massage, 3 drink limit) $85
- Wine & rose-infused bath with Pink Himalayan salt
- Wine & rose sugar scrub
- Champagne foot rinse
- Hydrating rose mask
- Paraffin wax treatment
- Deep tissue hot stone massage with wine & rose lotion
- Indulge: Soft, radiant skin with a beautiful fragrance

24K Golden Pedicure (60 minutes) $80 With Gel (15-min massage, 3 drink limit) $90
- 24K gold powder foot soak with Pink Himalayan salt
- Gold-infused sugar scrub & golden mud masque
- Collagen-rich gold foot mask
- Exclusive 24K gold massage cream
- Deep tissue hot stone massage with warm towels
- Luxury: An opulent experience that leaves skin glowing

Cucumber Detox Pedicure (50 minutes) $60 With Gel (10-min massage, 2 drink limit) $70
- Mint sea salt bath soak
- Cucumber salt scrub
- Moist cucumber masque
- Paraffin aromatherapy treatment
- Extended massage with mineral-rich cucumber cream
- Benefits: Hydration, anti-aging, and detoxifying properties

Classic Pedicure (30 minutes) $35 With Gel (5-min massage, 1 drink limit) $45
- Includes nail clipping, shaping, sugar scrub, moisturizing treatment, and massage.
- Perfect for quick maintenance and clean comfort.

Bling Deluxe Pedicure (40 minutes) $45 With Gel (8-min massage, 1 drink limit) $55
- Nail clipping and shaping
- Gentle sugar scrub exfoliation
- Replenishing lotion massage
- Hot towel treatment
- Ideal for a little extra pampering and shine.

NAILS
Full Set / Fill
BIO BUILDER GEL $60 / $50+
GEL X $60+ / $50+
ACRYLIC POWDER $55 / $45+
PINK & WHITE $60+ / $50+
ACRYLIC ON TOES $50 / $45+
OMBRE SET $60+ / $50+
POLY GEL / TAP GEL $60+ / $50+

NAIL ENHANCEMENTS (Gel Polish included)
Full Set / Fill
BIO BUILDER GEL $60 / $50+
GEL X $60+ / $50+
ACRYLIC POWDER $55 / $45+
PINK & WHITE $60+ / $50+
ACRYLIC ON TOES $50 / $45+
OMBRE SET $60+ / $50+
POLY GEL / TAP GEL $60+ / $50+

DIPPING POWDER
DIPPING POWDER $45
DIP WITH TIP EXTENSION $55+
DIP WITH FRENCH TIP $55
DIP WITH FRENCH TIP EXTENSION $65
DIP OMBRE $55
DIP OMBRE EXTENSION $65

ADD-ON SERVICES
LENGTH $5 and up
NAIL REPAIR / FIX $5+ EACH
GEL / ACRYLIC REMOVAL $5+ / $10+
FRENCH TIP $10
FRENCH CURVE $20
COLORS CHANGE REGULAR (TOE) $15
COLORS CHANGE REGULAR (HAND) $20
COLORS CHANGE POLISH (TOE) $25
COLORS CHANGE POLISH (HAND) $25
CHROME / CATEYE $15
AIRBRUSH $15
BASIC DESIGN $5
CUSTOMIZED DESIGNS CHECK WITH YOUR NAIL TECH
PARAFFIN WAX $10

KID SERVICES (Age 10 and under)
GEL / REG
NAIL POLISH CHANGE $15 / $10
TOE POLISH CHANGE $15 / $10
MANICURE $25 / $20
PEDICURE $30 / $25

WAXING
EYEBROWS LIPS $15
LIPS $5
EYEBROWS $10
EYEBROWS TIN $25
CHIN $5 and up
CHEEKS $10
SIDEBURNS $12
FULL FACE $40
UNDERARMS $18 and up
BACK $40 and up
ARMS Half Arm $25 Full Arm $45
LEG Half $40 Full $60
          </pre>
        </div>
      </div>
    </section>
  );
}