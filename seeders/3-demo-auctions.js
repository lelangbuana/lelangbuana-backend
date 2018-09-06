'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const demoAuctions = [{
        user_id: 1,
        category_id: 7,
        title: 'Nike T-Shirt',
        item_condition: 'Used',
        item_description: 'Sell Nike T-Shirt which has been used only 1 day.',
        quantity: 1,
        start_bid: 50000,
        max_bid: 1000000,
        min_bid: 50000,
        bids_multiply: 10000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 10:00:00'),
        item_photo: 'http://1.bp.blogspot.com/-roMZsRqsZGQ/Uj9wlbnqbYI/AAAAAAAAAbU/iCjblpQqjVM/s1600/Jual+Kaos+Futsal+Harga+Grosir+Murah+Perstel.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 8,
        title: 'Pobeda USSR Vintage Watches ',
        item_condition: 'New',
        item_description: `Sell Pobeda watches 1954 (USSR Brand).
Case 30mm.
Rope Leather 16mm.`,
        quantity: 1,
        start_bid: 800000,
        max_bid: 4000000,
        min_bid: 800000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 11, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2017/09/03/jual_jam_tangan_vintage_ussr_pobeda_1504441041_a24a0bc1.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 9,
        title: 'Fossil Bag',
        item_condition: 'New',
        item_description: `Sell Fossil bag for women. 
Colour: Orange.`,
        quantity: 1,
        start_bid: 100000,
        max_bid: 1000000,
        min_bid: 100000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2017/04/01/jual_tas_fossil_second_1491047354_511696aa.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 10,
        title: 'MOREANDMORE Persplex Acrylic Necklace',
        item_condition: 'New',
        item_description: `- Length: 35cm 
- Width 16.5cm
- Futuristic necklace made by local designer with good quality`,
        quantity: 1,
        start_bid: 500000,
        max_bid: 2000000,
        min_bid: 500000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 9, 2018 12:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/02/moreandmore_persplex_acrylic_necklace_1535889462_3b560e3a.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 11,
        title: 'Original Yankees New York Hat',
        item_condition: 'Used',
        item_description: 'This is my hat which has been used only 2 weeks. I am selling this for donation. The winner can call to 081293243298',
        quantity: 1,
        start_bid: 100000,
        max_bid: 1000000,
        min_bid: 100000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/07/03/topi_new_york_yankees_original_1530599090_8ffe68c7.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 12,
        title: 'Classic Wood Coffee Table',
        item_condition: 'Used',
        item_description: `Size : 1190mm (W), 700mm (D), 470mm (H).`,
        quantity: 1,
        start_bid: 1300000,
        max_bid: 5000000,
        min_bid: 1300000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 8, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/04/meja_kecil_kayu_klasik__classic_wood_coffee_table_1533386266_6b64c1e00',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 13,
        title: 'Baby Belle High Chair',
        item_condition: 'Used',
        item_description: `Baby chair made from solid wood. 
There is a pillow and safety belt. 
This chair is suitable for baby and toddler. 
Dimension : 68x55x92 cm.`,
        quantity: 6,
        start_bid: 50000,
        max_bid: 200000,
        min_bid: 50000,
        bids_multiply: 10000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/14/baby_belle_high_chair_1534232761_41f374b7.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 14,
        title: 'Cupboard Set (Wardrobe)',
        item_condition: 'Used',
        item_description: `Measurement:  220 × 220 CM. 
Material: Glass and Wood. 
Including key drawers and closets inside cupboard.`,
        quantity: 1,
        start_bid: 1850000,
        max_bid: 7000000,
        min_bid: 1850000,
        bids_multiply: 200000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 11:11:11'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/06/03/cupboard_set_wardrobe_1528017202_77a1cda2.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 15,
        title: 'Toshiba freezer',
        item_condition: 'Used',
        item_description: 'Toshiba Refrigerators. Good Condition',
        quantity: 1,
        start_bid: 900000,
        max_bid: 5000000,
        min_bid: 900000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 15, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/31/toshiba_freezer_1535697888_19842761.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 16,
        title: 'Bed Cover',
        item_condition: 'Used',
        item_description: `Include: 
- bed cover : 160 x 200 cm
- Blanket :210 x 210 cm
- 2 Pillow case : 65 x 45 cm
- 2 bolster : 35 x 95 cm`,
        quantity: 1,
        start_bid: 200000,
        max_bid: 3000000,
        min_bid: 200000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 13, 2018 11:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/02/bed_cover_1535888039_2a3bbe66.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 17,
        title: 'United Tricycle Mini Bike',
        item_condition: 'Used',
        item_description: `- Condition : 95% good
- Colour : Green`,
        quantity: 1,
        start_bid: 550000,
        max_bid: 5000000,
        min_bid: 550000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 12, 2018 12:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/19/united_tricycle_mini_bike_2nd_1534679634_233da997.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 18,
        title: 'Paw paw shall',
        item_condition: 'Used',
        item_description: 'I bought it from Netherland. Very Good quality',
        quantity: 1,
        start_bid: 25000,
        max_bid: 500000,
        min_bid: 25000,
        bids_multiply: 10000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 08:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/01/paw_paw_shall_1535737875_024dbe6c.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 19,
        title: 'Badminton Lining N7II Light Zhao Yun Lei ( N7 II) ORIGINAL',
        item_condition: 'Used',
        item_description: `Li-Ning N7II Light Zhao Yunlei Badminton Racket 
- Model: Li-Ning N7II Light Zhao Yunlei Badminton Racket
- Style Code: AYPL162-1
- Color: Pink
- Materials: Military Grade Carbon Fiber
- Weight: 75-79g(5u/w1)
- Grip Size: S1
- Full Length: 675mm
- Grip Length: 200mm 
- Balance Point: 306mm
- Flex: Flexible 
- Tension: Vertical 24-28 lbs
- Horizontal 26-32 lbs`,
        quantity: 1,
        start_bid: 2000000,
        max_bid: 10000000,
        min_bid: 2000000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 15, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/02/raket_badminton_lining_n7ii_light_zhao_yun_lei__n7_ii_original_asli_bulutangkis_1535818725_42a8d6a10',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 20,
        title: 'VOLLY BALL MIKASA MV210',
        item_condition: 'Used',
        item_description: `- CHEAP
- IMPORT (Made In China)
- SUITABLE FOR PRACTICE
- INCLUDE NET`,
        quantity: 1,
        start_bid: 89000,
        max_bid: 500000,
        min_bid: 89000,
        bids_multiply: 5000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 10, 2018 07:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2017/09/09/bola_voli_mikasa_mv210_1504940755_e936c3c3.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 21,
        title: 'NIKE REVOLUTION 3',
        item_condition: 'Used',
        item_description: `- Size UC:8C, UK:7.5, EUR:25, CM:14 
- Made in india
- Original Nike Kids.`,
        quantity: 1,
        start_bid: 250000,
        max_bid: 2000000,
        min_bid: 250000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 12, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/28/nike_revolution_3_1535445221_db0658a3.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 22,
        title: 'indonesia Badminton Jersey',
        item_condition: 'Used',
        item_description: `Sell Indonesia Badminton Jersey. 
Size M. 
WA : 081290402018.`,
        quantity: 1,
        start_bid: 50000,
        max_bid: 500000,
        min_bid: 50000,
        bids_multiply: 10000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 12, 2018 12:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/05/jersey_badminton__bulutangkis_timnas_indonesia_1536162931_b40bc8d4.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 23,
        title: 'Bench Press Sport Equipment',
        item_condition: 'Used',
        item_description: `Brand X2FIT. Rarely used since purchased. Good condition.`,
        quantity: 1,
        start_bid: 1100000,
        max_bid: 5000000,
        min_bid: 1100000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 12, 2018 10:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/07/22/bench_press_sport_equipment_1532243867_a9e8be9a.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 24,
        title: 'Oppo a71',
        item_condition: 'Used',
        item_description: ` - Condition: 95% Good
- The phone still sealed
- Functional: 100% work and has passed the check carefully
- Completeness: fullset
- Warranty: 1 week.`,
        quantity: 1,
        start_bid: 1400000,
        max_bid: 5000000,
        min_bid: 1400000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 12, 2018 11:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/06/oppo_a71_1536205139_c023e5c4.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 25,
        title: 'Canon sx400is',
        item_condition: 'Used',
        item_description: `Good condition. Include Camera memory and charger.`,
        quantity: 1,
        start_bid: 1200000,
        max_bid: 5000000,
        min_bid: 1200000,
        bids_multiply: 50000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 11, 2018 12:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/06/canon_sx400is_1536205533_06ca8435.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 26,
        title: 'Macbook Air silver 128gb 11" 2015',
        item_condition: 'Used',
        item_description: `Second like new !! Macbook air 2015. All complete like chargers etc. There is still sealed, only the box is out of the package and still has official ibox Indonesia warranty + iprotect`,
        quantity: 1,
        start_bid: 9500000,
        max_bid: 20000000,
        min_bid: 9500000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 13, 2018 10:35:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/01/macbook_air_silver_128gb_11_2015_1533137034_ae40d3bc.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 27,
        title: 'LED Toshiba TV 23inch',
        item_condition: 'Used',
        item_description: `LED Toshiba TV 23 inch + original Toshiba remote + good condition.`,
        quantity: 1,
        start_bid: 1100000,
        max_bid: 5000000,
        min_bid: 1100000,
        bids_multiply: 100000,
        start_date: new Date('August 28, 2018 10:00:00'),
        end_date: new Date('September 13, 2018 09:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/30/tv_led_toshiba_23inch_1535637546_61140e41.jpg',
        status: 'ongoing',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 28,
        title: 'Cosmos Iron',
        item_condition: 'Used',
        item_description: `Color: Orange. 
Electric Usage: 200 watt. 
Dimension: 25x10x5 cm. 
Weight: 600 gr.`,
        quantity: 1,
        start_bid: 5000,
        max_bid: 300000,
        min_bid: 5000,
        bids_multiply: 50000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 11, 2018 10:00:00'),
        item_photo: 'https://jualelektronik.com/wp-content/uploads/2016/06/Cosmos-Setrika-400-Watt-CIS-418.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 29,
        title: 'Credit all new avanza type e 2016',
        item_condition: 'Used',
        item_description: `The tax is still valid until May 2019. 
The car is very well maintained. 
If you win, you can call/WA 081283003942.`,
        quantity: 1,
        start_bid: 50000000,
        max_bid: 100000000,
        min_bid: 50000000,
        bids_multiply: 1000000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 11, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/04/over_kredit_all_new_avanza_type_e_2016_1536040565_a185a749.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 30,
        title: 'White Honda Beat 2012',
        item_condition: 'Used',
        item_description: `Honda Beat 2012. 
The tax is still valid. 
Include STNK, BPKB. 
Good condition. 
The winner can call/WA 0813-4055-5700.`,
        quantity: 1,
        start_bid: 4300000,
        max_bid: 15000000,
        min_bid: 4300000,
        bids_multiply: 100000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 11, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/06/honda_beat_putih_2012_1536177777_b5ebb2dd.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 31,
        title: 'Motorcycle Battery Champion Hybrid GTZ5S',
        item_condition: 'New',
        item_description: `Champion Hybrid GTZ5S 4 Ah 12 volt for Yamaha Mio Soul, Yamaha Mio-J and Yamaha Xeon.`,
        quantity: 1,
        start_bid: 120000,
        max_bid: 1000000,
        min_bid: 120000,
        bids_multiply: 10000,
        start_date: new Date('August 10, 2018 09:00:00'),
        end_date: new Date('August 20, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/29/aki_motor_champion_hybrid_gtz5s_1535554126_9cc69771.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 32,
        title: 'Car Velg Racing Ring 17 HSR JD2735',
        item_condition: 'New',
        item_description: `-Velg Name: JD2735 HSR Wheel
- Ring Size: 17 Inch
- L. front: 7,5 Inch
- L. Back: 7,5 Inch
- Pcd Diameter: 4x100 and 4x114,3 mm
- Offser/Et: 42 mm
- Velg Colour: Black Red Lips.`,
        quantity: 4,
        start_bid: 5100000,
        max_bid: 10100000,
        min_bid: 5100000,
        bids_multiply: 100000,
        start_date: new Date('August 10, 2018 10:35:00'),
        end_date: new Date('August 16, 2018 10:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/04/velg_racing_mobil_ring_17_hsr_jd2735_lebar_pelek_75_baut_4_merah_lips_1535990585_5e87065d0',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 33,
        title: 'Jalu Convex Rearview for Motorcycle ',
        item_condition: 'New',
        item_description: `- This rearview is suitable for all motorcycle.
- Full CNC.
- The rearview mirror can be positioned to down or sideways.
- Convex glass.`,
        quantity: 2,
        start_bid: 170000,
        max_bid: 1070000,
        min_bid: 170000,
        bids_multiply: 10000,
        start_date: new Date('August 10, 2018 12:00:00'),
        end_date: new Date('August 15, 2018 11:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/15/spion_jalu_engsel_tekuk_adjustable_cafe_racer_bar_end_cembung_1534305982_480464b0.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 34,
        title: 'Alexandrite Solitaire Ring Diamond',
        item_condition: 'New',
        item_description: `So Elegant & Classy , Available for Gift for your loved ones.`,
        quantity: 1,
        start_bid: 100000,
        max_bid: 3000000,
        min_bid: 100000,
        bids_multiply: 50000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 14, 2018 12:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/05/20/alexandrite_solitaire_ring_diamond_1526778619_fe4c2175.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 35,
        title: 'Keris Semar mesem',
        item_condition: 'Used',
        item_description: 'Original from kuningan.',
        quantity: 2,
        start_bid: 150000,
        max_bid: 1050000,
        min_bid: 150000,
        bids_multiply: 50000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 21, 2018 11:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/09/04/keris_semar_mesem_1536010660_7fc655f6.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 4,
        category_id: 36,
        title: 'Mini travel guitar Legacy',
        item_condition: 'Used',
        item_description: 'Sell mini travel guitar merk Legacy. I selled this because i rarely used this guitar.',
        quantity: 1,
        start_bid: 150000,
        max_bid: 1050000,
        min_bid: 150000,
        bids_multiply: 50000,
        start_date: new Date('August 10, 2018 09:00:00'),
        end_date: new Date('August 18, 2018 12:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/27/mini_travel_guitar_legacy_1535301313_fdbf5966.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 37,
        title: 'ELC Car Toys',
        item_condition: 'Used',
        item_description: `The car has a string that can be pulled. The condition is still good and there is a voice, but there is no box.`,
        quantity: 1,
        start_bid: 170000,
        max_bid: 2070000,
        min_bid: 170000,
        bids_multiply: 10000,
        start_date: new Date('August 10, 2018 11:30:00'),
        end_date: new Date('August 13, 2018 11:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/12/elc_car_toys_maucoach_1534044392_909d38eb.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 38,
        title: 'My Pals Science Test Book For Primary 5 & 6',
        item_condition: 'Used',
        item_description: `This is my pals science test book for primary 5 & 6 which has been used only 1 month.`,
        quantity: 8,
        start_bid: 40000,
        max_bid: 300000,
        min_bid: 40000,
        bids_multiply: 10000,
        start_date: new Date('August 10, 2018 11:25:00'),
        end_date: new Date('August 20, 2018 12:20:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2017/11/25/my_pals_science_test_book_for_primary_5__6_1511579739_b72cdf3c.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 3,
        category_id: 39,
        title: `Men's belt made of cobra snake`,
        item_condition: 'New',
        item_description: `Material: genuine tanned cobra snake.
Color: brown.
Size: Length: 110 cm, Wide: 3.5 cm.
It's eye catching and very natural looking.
No sewing needed. It was crafted using special technique.`,
        quantity: 1,
        start_bid: 300000,
        max_bid: 3000000,
        min_bid: 300000,
        bids_multiply: 50000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 15, 2018 12:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2017/12/25/mens_belt_made_of_cobra_snake_1514187922_576de192.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 40,
        title: 'Mac paint pot',
        item_condition: 'New',
        item_description: `Mac paintpot 
-Rubenesque 
-Perky 
-Bare study.`,
        quantity: 1,
        start_bid: 100000,
        max_bid: 1000000,
        min_bid: 100000,
        bids_multiply: 100000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('August 12, 2018 11:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/08/18/mac_paint_pot_1534577791_64b04e55.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 2,
        category_id: 41,
        title: 'Unique Coin',
        item_condition: 'Used',
        item_description: 'Old coin with strange aura.',
        quantity: 1,
        start_bid: 5000000,
        max_bid: 10000000,
        min_bid: 5000000,
        bids_multiply: 100000,
        start_date: new Date('August 10, 2018 10:00:00'),
        end_date: new Date('September 13, 2018 10:30:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2018/05/10/unique_coin_1525951481_5a58416a.jpg',
        status: 'success',
        created_at: new Date()
      },
      {
        user_id: 1,
        category_id: 42,
        title: 'Stamps Asian Games 2018',
        item_condition: 'New',
        item_description: 'Stamps Spesial edition 18th Asian Games 2018.',
        quantity: 18,
        start_bid: 70000,
        max_bid: 500000,
        min_bid: 70000,
        bids_multiply: 10000,
        start_date: new Date('August 30, 2018 10:00:00'),
        end_date: new Date('September 13, 2018 10:00:00'),
        item_photo: 'https://media.karousell.com/media/photos/products/2017/05/12/jual_perangko_antik_original_1494590235_ed6674d5.jpg',
        status: 'ongoing',
        created_at: new Date()
      }
    ];

    return queryInterface.bulkInsert('auctions', demoAuctions, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('auctions', null, {});
  }
};
