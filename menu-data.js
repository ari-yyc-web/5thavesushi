/* ===== Fifth Avenue Sushi — menu source of truth =====
 *
 * Edit this file to change the menu. Then run:
 *
 *     node build-menus.js
 *
 * ...which regenerates the static markup inside every menus/<page>/index.html
 * between the <!-- MENU:START --> / <!-- MENU:END --> markers.
 *
 * The menu is written into the HTML rather than rendered in the browser so the
 * dish names and prices stay crawlable — the menu is this site's main SEO asset.
 *
 * Item shape:
 *   name  (required)  dish name as printed
 *   price (required)  number, CAD, rendered as $N
 *   desc  (optional)  one short sentence
 *   img   (optional)  path under img/menu/ — omit and the card renders text-only
 */

const MENU = {
  'sushi-sashimi': {
    title: 'Sushi & Sashimi',
    groups: [
      {
        name: 'Sashimi',
        note: 'Thick-cut, sliced to order. Served 2 pcs unless noted.',
        items: [
          { name: 'Deluxe Sashimi (8 pcs)', price: 36, desc: 'One of each type.', img: 'sashimi/deluxe-sashimi-8-pcs.jpg' },
          { name: 'Salmon Sashimi', price: 8, img: 'sashimi/salmon-sashimi-2-pcs.jpg' },
          { name: 'Tuna Sashimi', price: 8, desc: 'Thinly sliced raw tuna sashimi.', img: 'sashimi/tuna-sashimi-2-pcs.jpg' },
          { name: 'Smoked Salmon Sashimi', price: 8, desc: 'Tender texture with a rich, smoky flavour.', img: 'sashimi/smoked-salmon-sashimi-2-pcs.jpg' },
          { name: 'Ebi Sashimi', price: 8, desc: 'Raw shrimp sashimi, served chilled.', img: 'sashimi/ebi-sashimi-2-pcs.jpg' },
          { name: 'Unagi Sashimi', price: 9, desc: 'Eel sashimi, thinly sliced.', img: 'sashimi/unagi-sashimi-2-pcs.jpg' },
          { name: 'Gungkan Crab Sashimi', price: 12 },
          { name: 'Tamago Sashimi', price: 10 },
          { name: 'Toro Sashimi', price: 10 }
        ]
      },
      {
        name: 'Sushi (Nigiri)',
        note: 'Hand-pressed over seasoned rice. Served 1 pc unless noted.',
        items: [
          { name: 'Deluxe Sushi (9 pcs)', price: 35, desc: 'One of each type.', img: 'sushi-nigiri/deluxe-sushi-9-pcs.jpg' },
          { name: 'Salmon Sushi', price: 4, img: 'sushi-nigiri/salmon-sushi-1-pc.jpg' },
          { name: 'Tuna Sushi', price: 3, img: 'sushi-nigiri/tuna-sushi-1-pc.jpg' },
          { name: 'Smoked Salmon Sushi', price: 4, img: 'sushi-nigiri/smoked-salmon-sushi-1-pc.jpg' },
          { name: 'Shrimp Sushi', price: 3, img: 'sushi-nigiri/shrimp-sushi-1-pc.jpg' },
          { name: 'Unagi Sushi', price: 4, desc: 'Cooked freshwater eel over seasoned sushi rice.', img: 'sushi-nigiri/unagi-sushi-1-pc.jpg' },
          { name: 'Gungkan Crab Sushi', price: 4, desc: 'Seaweed-wrapped sushi rice topped with crab, gunkan style.', img: 'sushi-nigiri/gungkan-crab-sushi-1-pc.jpg' },
          { name: 'Gungkan Tobiko Sushi', price: 4, img: 'sushi-nigiri/gungkan-tobiko-sushi-1-pc.jpg' },
          { name: 'Toro Sushi', price: 4 },
          { name: 'Tamago Sushi', price: 3 }
        ]
      }
    ]
  },

  'sushi-bar': {
    title: "Sushi Bar & Chef's Specials",
    groups: [
      {
        name: 'Special Rolls',
        note: 'Eight pieces, built to order.',
        items: [
          { name: '5th Avenue Signature Roll (8 pcs)', price: 28, desc: 'Salmon, tuna, avocado, tempura, crispy onions, tobiko.', img: 'special-rolls/5th-avenue-signature-roll-8-pcs.jpg' },
          { name: 'Lobster Roll (8 pcs)', price: 26, desc: 'Lobster, cucumber, avocado, unagi, mayo.', img: 'special-rolls/lobster-roll-8-pcs.jpg' },
          { name: 'Flying Eel Dragon Roll (8 pcs)', price: 25, desc: 'Eel, shrimp, avocado, cucumber, unagi, mayo, tobiko.', img: 'special-rolls/flying-eel-dragon-roll-8-pcs.jpg' },
          { name: 'Red Smoked Dragon Roll (8 pcs)', price: 25, desc: 'Smoked salmon, avocado, cucumber, unagi, mayo, tobiko, sriracha, crispy onion.', img: 'special-rolls/red-smoked-dragon-roll-8-pcs.jpg' },
          { name: 'Crispy Beef Roll (8 pcs)', price: 22, desc: 'Beef, unagi, spicy mayo, crispy onion.', img: 'special-rolls/crispy-beef-roll-8-pcs.jpg' },
          { name: 'Crispy California Roll (8 pcs)', price: 15, desc: 'Crab meat, avocado, tempura, spicy mayo, cucumber.', img: 'special-rolls/crispy-california-roll-8-pcs.jpg' },
          { name: 'Philadelphia Roll (8 pcs)', price: 21, desc: 'Salmon, cream cheese, cucumber, sesame seeds.' }
        ]
      },
      {
        name: 'Sushi Rolls',
        items: [
          { name: 'Rainbow Roll (8 pcs)', price: 18, desc: 'Rainbow-style roll with a colourful assortment of toppings.', img: 'sushi-rolls/rainbow-roll-8-pcs.jpg' },
          { name: 'Yam Avocado Roll (8 pcs)', price: 15, img: 'sushi-rolls/yam-avocado-roll-8-pcs.jpg' },
          { name: 'Spicy Salmon Roll (8 pcs)', price: 14, desc: 'Salmon with a spicy kick rolled in nori and sushi rice.', img: 'sushi-rolls/spicy-salmon-roll-8-pcs.jpg' },
          { name: 'Salmon Roll (8 pcs)', price: 12, img: 'sushi-rolls/salmon-roll-8-pcs.jpg' },
          { name: 'Spicy Tuna Roll (8 pcs)', price: 12, img: 'sushi-rolls/spicy-tuna-roll-8-pcs.jpg' },
          { name: 'Tuna Roll (8 pcs)', price: 10, desc: 'Tuna maki roll with sushi rice and nori.', img: 'sushi-rolls/tuna-roll-8-pcs.jpg' },
          { name: 'California Roll (8 pcs)', price: 10, img: 'sushi-rolls/california-roll-8-pcs.jpg' },
          { name: 'Avocado Roll (8 pcs)', price: 10, desc: 'Sushi rice and nori rolled with avocado.', img: 'sushi-rolls/avocado-roll-8-pcs.jpg' },
          { name: 'Cucumber Roll (8 pcs)', price: 10, desc: 'Cucumber maki: cucumber and sushi rice rolled in nori.', img: 'sushi-rolls/cucumber-roll-8-pcs.jpg' },
          { name: 'Dynamite Roll (8 pcs)', price: 16 }
        ]
      },
      {
        name: 'Party Trays',
        note: 'Take-out only. Please order ahead by phone for advance ordering on larger or bulk orders.',
        items: [
          { name: 'Platter A (40 pcs)', price: 69, desc: '8 pcs tuna roll, 8 pcs dynamite roll, 8 pcs cucumber roll, 16 pcs salmon roll.' },
          { name: 'Platter B (44 pcs)', price: 89, desc: '4 pcs salmon sushi, 4 pcs tuna sushi, 4 pcs shrimp sushi, 8 pcs rainbow roll, 8 pcs avocado roll, 8 pcs dynamite roll, 8 pcs California roll.' }
        ]
      }
    ]
  },

  'kitchen-hot': {
    title: 'Ramen & Hot Dishes',
    groups: [
      {
        name: 'Appetizers',
        items: [
          { name: 'Edamame', price: 8, desc: 'Young soybeans in the pod.', img: 'appetizers/edamame.jpg' },
          { name: 'Takoyaki (5 pcs)', price: 11, img: 'appetizers/takoyaki-5-pcs.jpg' },
          { name: 'Calamari', price: 13, desc: 'Seafood appetizer featuring squid.', img: 'appetizers/calamari.jpg' },
          { name: 'Crispy Shrimp (5 pcs)', price: 15, img: 'appetizers/crispy-shrimp-5-pcs.jpg' },
          { name: 'Agedashi Tofu', price: 11, desc: 'Lightly fried tofu served in a warm soy-dashi broth.', img: 'appetizers/agedashi-tofu.jpg' },
          { name: 'Chicken Karaage', price: 13, desc: 'Crispy Japanese-style fried chicken bites.', img: 'appetizers/chicken-karaage.jpg' },
          { name: 'Yakitori Chicken', price: 12, desc: 'Japanese-style grilled chicken skewers.', img: 'appetizers/yakitori-chicken.jpg' },
          { name: 'Beef Tataki (Tartar)', price: 22, photoPending: true },
          { name: 'Pork Kakuni', price: 12, desc: 'Japanese-style braised pork, slow-cooked until tender.', img: 'appetizers/pork-kakuni.jpg' },
          { name: 'Tuna Tataki', price: 18, desc: 'Lightly seared tuna, thinly sliced with a rare centre.', img: 'appetizers/tuna-tataki.jpg' },
          { name: 'Shrimp Tempura (6 pcs)', price: 15, desc: 'Shrimp coated in light tempura batter and fried until crisp.', img: 'appetizers/shrimp-tempura-6-pcs.jpg' },
          { name: 'Vegetable Tempura', price: 10, desc: 'Assorted vegetables in a light, crisp tempura batter.', img: 'appetizers/vegetable-tempura.jpg' },
          { name: 'Yam Tempura', price: 13, desc: 'Sliced yam in tempura batter, fried until crisp.', img: 'appetizers/yam-tempura.jpg' },
          { name: 'Gyoza AAA Alberta Beef (5 pcs)', price: 12, img: 'appetizers/gyoza-aaa-alberta-beef-5-pcs.jpg' },
          { name: 'House / Seaweed Salad', price: 10, desc: 'Appetizer portion.', img: 'appetizers/house-salad.jpg' },
          { name: 'Pickled Cucumbers', price: 8, desc: 'Cucumbers pickled in a tangy brine.', img: 'appetizers/pickled-cucumbers.jpg' },
          { name: 'BBQ Squid', price: 14 },
          { name: 'Spring Rolls (4 pcs) — Pork or Veg', price: 10 },
          { name: 'Garlic Butter Mussels (6 pcs)', price: 16 },
          { name: 'Fried Party Plate', price: 40, desc: '5 gyoza, 5 wings, 5 spring rolls, 5 takoyaki, 5 yam tempura.' },
          { name: 'Miso Soup', price: 3 }
        ]
      },
      {
        name: 'Ramen',
        note: 'Egg noodles. Choose your protein: chicken, beef, pork, or tofu. Ingredients: corn, tamago egg, wakame, green onions, nori, sesame seeds, togarashi. Please specify if you’re vegetarian so we can modify it for you.',
        items: [
          { name: 'Shoyu Ramen', price: 23, desc: 'Ramen noodles in an umami soy sauce broth.', img: 'ramen/shoyu-ramen.jpg' },
          { name: 'Miso Ramen', price: 23 },
          { name: 'Spicy Miso Ramen', price: 24 },
          { name: 'Spicy Shoyu Ramen', price: 24 }
        ]
      },
      {
        name: 'Mains',
        items: [
          { name: 'Poke Bowl', price: 25, desc: 'Sushi rice, salmon, tuna, crab, shrimp, tobiko, mixed greens, medium poached egg.', img: 'mains/poke-bowl.jpg' },
          { name: 'Unagi Don', price: 25, desc: 'Rice, unagi eel, green onion, sesame.', photoPending: true },
          { name: 'Karaage Don', price: 18, desc: 'Rice, chicken karaage, green onion, spicy mayo.', photoPending: true },
          { name: 'Izakaya Pork Sisig', price: 25, desc: 'Green pepper, onions, shoyu, egg yolk, toasted panko.', photoPending: true }
        ]
      },
      {
        name: 'Mains — Rice & Vegetable Plates',
        note: 'Comes with rice and mixed vegetables. Add chili oil on the side for $1.',
        items: [
          { name: 'Wafu Bifu NY Steak (7 oz)', price: 42, img: 'mains/wafu-bifu-ny-steak-7-oz.jpg' },
          { name: 'Teppanyaki NY Steak (7 oz)', price: 40, img: 'mains/teppanyaki-ny-steak-7-oz.jpg' },
          { name: 'Teriyaki Salmon', price: 30, img: 'mains/teriyaki-salmon.jpg' },
          { name: 'Lemon Garlic Snapper', price: 28, img: 'mains/lemon-garlic-snapper.jpg' },
          { name: 'Kakuni Braised Pork', price: 28, img: 'mains/kakuni-braised-pork.jpg' },
          { name: 'Teriyaki Chicken', price: 25, img: 'mains/teriyaki-chicken.jpg' },
          { name: 'Pork Tonkatsu', price: 23, photoPending: true }
        ]
      },
      {
        name: 'Stir-Fry & Noodles',
        note: 'Yakisoba or udon noodles — your choice.',
        items: [
          { name: 'Chicken Stir-Fry', price: 21, img: 'stir-fry/chicken-yakisoba.jpg' },
          { name: 'Beef or Shrimp Stir-Fry', price: 24, img: 'stir-fry/beef-udon.jpg' },
          { name: 'Vegetable Stir-Fry', price: 15, img: 'stir-fry/vegetable-yakisoba.jpg' }
        ]
      },
      {
        name: 'Rice',
        items: [
          { name: 'Yakimeshi Rice', price: 16, desc: 'Shoyu, egg, green onion, sesame oil, corn.', img: 'rice/yakimeshi-rice.jpg' },
          { name: 'Steamed Rice (1 Cup)', price: 4, img: 'rice/steamed-rice-1-cup.jpg' }
        ]
      }
    ]
  },

  'lunch': {
    title: 'Lunch Menu',
    groups: [
      {
        name: 'Bento Box',
        note: 'Available at lunch only.',
        items: [
          { name: 'Bento Plate B', price: 33, desc: 'Salmon nigiri (1 pc), tuna nigiri (1 pc), California roll (4 pcs), and a protein of your choice (beef, chicken, or pork) with rice & veggie stir-fry. Served with miso soup and house salad.', img: 'bento-box-lunch-only/bento-plate-b.jpg' },
          { name: 'Bento Plate A', price: 31, desc: 'Salmon nigiri (1 pc), tuna nigiri (1 pc), ebi nigiri (1 pc), salmon sashimi (1 pc), tuna sashimi (1 pc), California roll (4 pcs). Served with miso soup and house salad.', img: 'bento-box-lunch-only/bento-plate-a.jpg' }
        ]
      }
    ]
  },

  'drinks-sake': {
    title: 'Drinks & Sake',
    groups: [
      {
        name: 'Drinks',
        items: [
          { name: 'Soda', price: 3, desc: 'Coke, Sprite, or ginger ale.' },
          { name: 'Juice', price: 3, desc: 'Cranberry, orange, or iced tea.' },
          { name: 'Hot Tea', price: 3 },
          { name: 'Bubble Tea', price: 7, desc: 'Matcha or Thai.' }
        ]
      },
      {
        name: 'Alcohol',
        items: [
          { name: 'Asahi (500 ml, 5%)', price: 11 },
          { name: 'Sapporo (500 ml, 5%)', price: 11 },
          { name: 'Heineken (330 ml, 5%)', price: 8 },
          { name: 'Corona (330 ml, 4.6%)', price: 8 },
          { name: 'Wine (6 oz)', price: 8, desc: 'Red or white.' },
          { name: 'High Ball (1 oz)', price: 8 },
          { name: 'Sake (2 oz)', price: 8 }
        ]
      }
    ]
  },

  'dessert': {
    title: 'Dessert',
    groups: [
      {
        name: 'Dessert',
        items: [
          { name: 'Ice Cream (2 Big Scoops)', price: 6, desc: 'Ask your server for available flavours.', photoPending: true }
        ]
      }
    ]
  }
};

/* Works both as a <script> tag in the browser and as a Node require. */
if (typeof module !== 'undefined' && module.exports) module.exports = MENU;
