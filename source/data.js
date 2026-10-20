/* ================= S. M. Builders & Developers — shared data =================
   Every fact below comes from smbuilders.com.pk: the project pages and the
   brochures, flyers and infographics published there (payment schedule,
   "Top shelf materials", Burj Al Jinnah overview and location cards, the
   S. M. Axis area schedule). Nothing is estimated.
   Images live in /images (copied by .github/workflows/fetch-images.yml);
   each <img> falls back to the original URL if a local copy is missing.        */
const SM_DATA = (() => {
  const U = 'https://smbuilders.com.pk/wp-content/uploads/';
  const local = p => 'images/' + p.replace('elementor/thumbs/', 'thumbs-').replace(/\//g, '-');
  const pic = (p, cap) => ({ src: local(p), fb: U + p, cap });
  const yt = id => ({ src: 'images/yt-' + id + '.jpg', fb: `https://img.youtube.com/vi/${id}/maxresdefault.jpg` });

  /* ---------- contact ---------- */
  const C = {
    uan: '03-111-756-111', uanTel: '+923111756111', email: 'info@smbuilders.com.pk',
    wa: '923153002144', waShow: '0315-3002144',
    sales: [['0315-3002150', '+923153002150'], ['0315-3002144', '+923153002144'], ['0315-3002146', '+923153002146'], ['0315-3002147', '+923153002147']],
    feedback: ['0315-3002142', '+923153002142'],
    offices: [
      { k: 'Head office', n: 'Burj Al Jinnah', a: 'Burj Al Jinnah, NIPA CHS, Main Jinnah Avenue, Malir Cantt, Sector 45-A, Scheme 33, Karachi', q: 'Burj Al Jinnah, Main Jinnah Avenue, Karachi' },
      { k: 'Site office', n: 'S. M. House', a: 'B-15 / B-36, Block L, North Nazimabad, KDA Scheme No. 2, Karachi', q: 'B-15, Block L, North Nazimabad, Karachi' },
      { k: 'Site office', n: 'S. M. Axis', a: 'D-5, Block N, North Nazimabad, Main Sher Shah Suri Road, Karachi', q: 'D-5, Block N, North Nazimabad, Sher Shah Suri Road, Karachi' }
    ],
    social: { fb: 'https://www.facebook.com/SMBuildersDeveloper', ig: 'https://www.instagram.com/s.m.buildersdeveloper', yt: 'https://www.youtube.com/@SMBuildersDeveloper', li: 'https://www.linkedin.com/company/sm-builders-developers/', x: 'https://x.com/S_MBuilders' },
    files: {
      brochure: U + '2023/01/S-M-Builders-Developers-Brochure.pdf',
      trifold: U + '2023/01/Burj-Al-Jinnah-3-Fold.pdf',
      profile: U + '2026/05/SM-Group-Company-Profile.pdf'
    }
  };

  /* ---------- projects ---------- */
  const BURJ_IN = [
    ['2021/06/reception-_5-00000-scaled.jpg', 'Air-conditioned reception lobby'],
    ['2021/06/Drwaingroom-Cam-1-00000.jpg', 'Drawing room'], ['2021/06/Drwaingroom-Cam-2-00000.jpg', 'Drawing room'], ['2021/06/Drwaingroom-Cam-3-00000.jpg', 'Lounge'],
    ['2021/06/Bedroom_master-cam-1-00000.jpg', 'Master bedroom'], ['2021/06/Bedroom_master-cam-2-00000.jpg', 'Master bedroom'], ['2021/06/Bedroom_master-cam-3-00000.jpg', 'Master bedroom'],
    ['2021/06/Bedroom-Cam1-00000.jpg', 'Bedroom'], ['2021/06/Bedroom-Cam2-00000.jpg', 'Bedroom'], ['2021/06/Bedroom-Cam3-00000.jpg', 'Bedroom'],
    ['2021/06/Kids-Room-1.jpg', "Children's room"], ['2021/06/Kids-Room-2.jpg', "Children's room"],
    ['2021/06/Bathroom1-cam2-00000.jpg', 'Bathroom'], ['2021/06/Bathroom2-cam1-00000.jpg', 'Bathroom'], ['2021/06/Bathroom2-cam2-00000.jpg', 'Bathroom']
  ].map(([p, c]) => pic(p, c));

  const P = [
    {
      s: 'burj-al-jinnah', sum: 'Serviced, semi-furnished 2, 3 and 4-bed apartments and seven penthouses opposite Malir Cantt, with 100% load backup, a pool, sauna and an air-conditioned masjid. The completion certificate is in hand.', n: 'Burj Al Jinnah', short: 'Burj', no: '01',
      tagline: "Jinnah Avenue's No. 1 living destination",
      kind: 'res', kindLabel: 'Serviced apartments & showrooms', stage: 'ready', status: 'Completion certificate acquired', statusShort: 'Possession soon',
      area: 'Main Jinnah Avenue', loc: 'Main Jinnah Avenue, opposite Malir Cantt (CP-5), NIPA CHS, Karachi', q: 'Burj Al Jinnah, Main Jinnah Avenue, Karachi',
      building: 'Basement + Ground + 18', units: '2, 3 & 4 bed + 7 penthouses',
      d: "Hotel-like living on Main Jinnah Avenue, opposite Malir Cantt: Karachi's exclusive, secure and serene community. Burj Al Jinnah is S. M. Builders' flagship, a tower of serviced apartments in Spanish-inspired architecture with 2, 3 and 4-bed homes, seven penthouses and premium showrooms. The completion certificate has been acquired, sub-lease is being provided, and the building is in its final finishing phase with possession very soon.",
      facts: [['Building', 'Basement + Ground + 18'], ['Homes', '2, 3 & 4 bed + 7 penthouses'], ['Payment', '30% down, 42 monthly'], ['Status', 'Completion certificate']],
      hl: ['Located on a 200 ft major road', 'Serviced, semi-furnished apartments, ready to move in', 'In-gated community', 'No other high-rise in the nearby surroundings', 'Lifetime maintenance by the builder', 'Approved by SBCA & MDA', 'Registered in the Amnesty Scheme', 'Single-belt apartments open on the west and east sides', 'Spacious balconies with views of the vicinity', 'Showrooms with basement and wall-sized windows'],
      a: ['100% electricity load backup', '24 × 7 security', 'On-premises armed guards', 'State-of-the-art surveillance', 'RFID-based access', 'Air-conditioned reception lobby', 'Temperature-controlled swimming pool', 'Sauna', 'Fully equipped gym', 'Gaming zone & indoor games', 'Study zone', 'Library', 'Air-conditioned masjid', 'Wheelchair accessibility', 'Garbage chute', 'In-house laundry, internet & maintenance', 'Parking'],
      materials: [['Grohe', 'Sanitary fittings'], ['Kohler (Germany)', 'High-speed A/C elevators'], ['Pakistan Cables', 'Wiring & accessories'], ['Envicrete', 'Blocks'], ['Agha Steel & Amreli Steel', 'Structural steel'], ['ERA', 'Water pipes'], ['Google Smart Home', 'Smart home'], ['RFID', 'Smart apartment access']],
      near: [['Brigadier Houses, Malir Cantt', 0, 'Opposite'], ['PAF Falcon Houses', 0, 'Adjacent'], ['Saadi Town', 3], ['M-9 Motorway', 3], ['Main University Road', 5], ['Jinnah International Airport', 7], ['Memon Medical Hospital', 7], ['Shahrah-e-Faisal', 10], ['University of Karachi', 12]],
      pay: { type: 'plan', down: 30, months: 42, note: 'Burj Al Jinnah is offered with a 30% down payment and an easy 42-month instalment plan. Prices are shared by the sales team.' },
      plans: [
        { n: 'Diamond', t: '3 bed DD with home office', area: 2691, unit: 'gross sq ft', img: pic('2024/06/diamond.jpg') },
        { n: 'Silver', t: '3 bed DD with home office', area: 2640, unit: 'gross sq ft', img: pic('2024/06/Silver-3.jpg') },
        { n: 'Sapphire', t: '4 bed lounge', area: 2621, unit: 'gross sq ft', img: pic('2025/08/sapphire.jpeg') },
        { n: 'Pearl', t: '2 bed DD', area: 1765, unit: 'gross sq ft', img: pic('2024/06/Pearl-4.jpg') }
      ],
      pics: [pic('2023/01/WhatsApp-Image-2023-01-28-at-3.52.59-PM.jpeg', 'Burj Al Jinnah, architectural render'), pic('2024/04/WhatsApp-Image-2024-04-05-at-6.06.33-AM-768x432.jpeg', 'Burj Al Jinnah lit at night'), pic('2024/01/burj.jpg', 'Burj Al Jinnah from Main Jinnah Avenue')].concat(BURJ_IN),
      extra: [pic('2023/01/WhatsApp-Image-2023-01-28-at-3.45.43-PM.jpeg', 'Location map, Main Jinnah Avenue'), pic('2025/08/WhatsApp-Image-2023-01-28-at-3.52.59-PM-1.jpeg', 'Burj Al Jinnah overview')],
      videos: [['xZz5TLfPrr8', 'Burj Al Jinnah property tour'], ['lejGWOHcTYA', 'Progress of 45 months'], ['HSP0JEkG_6s', 'Construction update, January 2026']],
      updates: [['Jan 2026', 'Final phase', 'Finishing work is in progress and possession will be handed over very soon.'], ['45 months', 'Completion certificate', 'Completion certificate acquired; sub-lease is being provided. Exclusive customised deals on apartments and showrooms.'], ['2023', 'Two floors a month', 'Structure rising at a construction speed of two floors every month.']]
    },
    {
      s: 'sm-house', sum: 'A Ground + 7 commercial landmark at Main 5 Star, opposite Chase Value: showrooms, column-less halls, clinics, offices and rooftop restaurants on a 150 ft road.', n: 'S. M. House', short: 'House', no: '02',
      tagline: 'Where business finds its home',
      kind: 'com', kindLabel: 'Commercial: showrooms, halls, clinics, restaurants', stage: 'build', status: 'Under construction · possession May 2027', statusShort: 'Possession May 2027',
      area: 'North Nazimabad · 5 Star', loc: 'B-15 / B-36, Block L, Main 5 Star (Food Street), North Nazimabad, Karachi', q: 'B-15, Block L, North Nazimabad, Karachi',
      building: 'Basement + Ground + 7 + rooftop', units: 'Showrooms, halls, clinics & restaurants',
      d: "An architectural landmark in the heart of District Central, one minute's walk from Main 5 Star Chowrangi and just opposite Chase Value. S. M. House is a three-side corner commercial building with a huge front on the 150 ft wide main road, near Hyderi Market, Imam Clinic and the food street. Spacious ground-floor outlets suit boutiques, cafés, clothing brands and bank branches; above them are column-less commercial halls, consulting clinics, offices and restaurants with a rooftop.",
      facts: [['Building', 'Basement + G + 7 + rooftop'], ['Frontage', '150 ft main road'], ['Payment', '25% down, 20 monthly'], ['Possession', 'May 2027']],
      hl: ['Main 5 Star, just opposite Chase Value', '3-side corner, leased & SBCA-approved', '32 ft wide double-height grand reception lobby', '3 modern, high-speed elevators', 'Full-load power backup, including ACs for offices & clinics', 'Separate entry & exit ramps for basement parking', 'Column-less post-tensioned flat slabs: freedom of interior planning', '13 ft height on every floor', 'Imported heat-proof glass elevation', 'Fire-fighting system with main & emergency stairs', 'No ballrooms in the building: a calmer business environment', 'Restaurant seating capacity of 850'],
      a: ['Grand reception lobby', 'High-speed elevators', '24/7 power backup', 'Basement parking', 'Fire-fighting system', 'Emergency stairs & exits', 'Planned space for AC outers & generators', 'Rooftop dining'],
      uses: [['Showrooms', 'Ground floor outlets with wall-sized glass'], ['Commercial halls', 'Column-less halls on the 1st to 3rd floors'], ['Clinics & offices', 'OPD clinics and executive offices, 4th to 6th'], ['Restaurants', '7th floor with 13 ft height and the rooftop']],
      pay: { type: 'rates', down: 25, months: 20, inst: 70, poss: 5, corner: 10, rates: [[1, 46000], [2, 43000], [3, 40000], [4, 40000], [5, 38000], [6, 38000], [7, 52000, '7th floor with rooftop']],
        note: 'Floor-wise gross rates for commercial spaces, per sq ft, as published by S. M. Builders. 25% down payment at booking, 70% in 20 monthly instalments, 5% at possession; corner outlets carry an extra 10%.' },
      plans: [
        { n: 'Basement', t: 'Parking', img: pic('2025/02/parking.jpg') },
        { n: 'Ground floor', t: 'Showrooms', img: pic('2025/02/showrooms.jpg') },
        { n: '1st floor', t: 'Commercial halls', img: pic('2025/05/Commercial-Hall-Floor-Plans-01.jpg') },
        { n: '2nd floor', t: 'Commercial halls', img: pic('2025/05/Commercial-Hall-Floor-Plans-02.jpg') },
        { n: '3rd floor', t: 'Commercial halls', img: pic('2025/05/Commercial-Hall-Floor-Plans-03.jpg') },
        { n: '4th to 6th', t: 'OPD clinics & offices', img: pic('2025/02/offices-clinics.jpg') },
        { n: '7th floor', t: 'Restaurants', img: pic('2025/02/restaurants.jpg') },
        { n: 'Roof', t: 'Rooftop restaurant', img: pic('2025/02/roof-top-restaurants.jpg') }
      ],
      pics: [pic('2024/08/THE-STRIKING-FACADE.jpg', 'The striking façade'), pic('2024/08/elevation-1.jpg', 'Elevation on the 150 ft main road'), pic('2024/08/A-GRAND-ENTRANCE.jpg', 'Grand entrance & reception'), pic('2024/08/PRIME-RETAIL-THERAPY.jpg', 'Ground-floor retail'), pic('2024/08/AMBROSIAL-ATMOSPHERES.jpg', 'Restaurant interior'), pic('2024/08/PANORAMIC-DINING.jpg', 'Panoramic rooftop dining'), pic('2024/08/CUTTING-EDGE-CLINIC-SUITES.jpg', 'Clinic suite'), pic('2024/08/PREMIUM-WORKSPACE-SOLUTIONS.jpg', 'Office workspace'), pic('2025/08/S.M-Payment-Plan-Preview_page-0004.jpg', 'S. M. House at night')],
      extra: [pic('2024/11/Location-Image-Vector-SM-House-01.jpg', 'Location, Block L, North Nazimabad'), pic('2025/02/SM-House-Flyer-11-2-25-01.jpg', 'Major differences from ordinary projects'), pic('2025/12/sm-house-post.jpeg', 'Restaurant space with rooftop')],
      videos: [],
      updates: [['May 2026', '7th floor slab complete', 'Basement, Ground + 7 floors and the final 9th slab cast within 15 months using post-tensioning technology.'], ['Launch', 'Launch event at Main 5 Star', 'S. M. House launched at Main Five Star, opposite Chase Value.'], ['May 2027', 'Possession', 'Target possession date published for the restaurant floors.']]
    },
    {
      s: 'sm-axis', sum: 'Ground + 22 floors and just 83 three-bed homes on a 1,055 sq yd corner plot facing the 320 ft Sher Shah Suri Road, with five parking floors and a rooftop walking track.', n: 'S. M. Axis', short: 'Axis', no: '03',
      tagline: 'Renowned for its integrity',
      kind: 'res', kindLabel: '3-bed apartments & showrooms', stage: 'launch', status: 'Booking open', statusShort: 'Booking open',
      area: 'North Nazimabad · Sher Shah Suri Rd', loc: 'D-5, Block N, North Nazimabad, facing the 320 ft Main Sher Shah Suri Road, Karachi', q: 'D-5, Block N, North Nazimabad, Karachi',
      building: 'Ground + 22 floors', units: '83 apartments · 3 bed', plot: 'Corner plot, 1,055 sq yd',
      d: 'A luxurious apartment project in the heart of District Central, KDA Scheme 2, North Nazimabad Block N, directly facing the 320 ft wide Main Sher Shah Suri Road. Designed for modern urban living, S. M. Axis offers 83 thoughtfully planned 3-bed homes with large panoramic windows, exceptional amenities and five dedicated parking floors, on a prime corner plot that holds both comfort and long-term value.',
      facts: [['Building', 'Ground + 22 floors'], ['Homes', '83 apartments, 3 bed'], ['Plot', 'Corner, 1,055 sq yd'], ['Status', 'Booking open']],
      hl: ['Corner plot of 1,055 sq yd', 'Directly facing the 320 ft Main Sher Shah Suri Road', 'Ground + 22 floors, only 83 residences', 'Large panoramic windows', '5 floors of dedicated parking with RFID smart access', 'A reserved 8 × 16 ft parking slot with every apartment', 'Showrooms at street level', 'Designed by Arch Vision Plus'],
      a: ['Reception lobby', 'Prayer area', 'Gym', 'Rooftop walking track', "Children's play area", 'Open-to-sky sitting deck', 'Garbage chute', '24/7 CCTV surveillance', 'RFID access', 'Standby generators', '5 floors of dedicated parking', 'Reserved 8 × 16 ft parking slot'],
      pay: { type: 'ask', note: 'Booking is open for S. M. Axis. Ask the sales team for the current price list and payment plan.' },
      types: [['A', 1597], ['A1', 1465], ['B', 1173], ['B1', 1127], ['B2', 1072]],
      plans: [
        { n: 'Unit types', t: 'A, A1, B, B1 & B2', img: pic('2026/05/9-1.jpg') },
        { n: '7th to 22nd', t: 'Typical floor', img: pic('2026/05/8.jpg') },
        { n: '6th floor', t: 'Apartments & amenities', img: pic('2026/05/7.jpg') },
        { n: 'Ground floor', t: 'Showrooms & lobby', img: pic('2026/05/2-2.jpg') },
        { n: 'Basement', t: 'Parking', img: pic('2026/05/1-2.jpg') },
        { n: '1st floor', t: 'Parking', img: pic('2026/05/3.jpg') },
        { n: '2nd floor', t: 'Parking', img: pic('2026/05/4.jpg') },
        { n: '3rd & 4th', t: 'Parking', img: pic('2026/05/5.jpg') },
        { n: '5th floor', t: 'Parking', img: pic('2026/05/6.jpg') },
        { n: 'Roof', t: 'Walking track & sky deck', img: pic('2026/05/10.jpg') }
      ],
      pics: [{ src: 'images/ui/axis-dusk.jpg', cap: 'S. M. Axis at dusk, architectural render' }, { src: 'images/ui/axis-day.jpg', cap: 'S. M. Axis on Sher Shah Suri Road, architectural render' }],
      extra: [pic('2026/05/360-image.jpg', '360° virtual tour'), pic('elementor/thumbs/S.-M-Rull-up-rncd1dpesbwmmzqwr7wxsmxbej9d1vsosoj7cn0cts.jpg', 'Booking open: apartments & amenities')],
      tour: 'https://smbuilders.com.pk/sm-axis-apartment-virtual-tour/',
      videos: [],
      updates: [['Dec 2025', 'Launched', 'S. M. Axis launched; booking open for 3-bed drawing/lounge and 3-bed lounge apartments.'], ['May 2026', '360° virtual tour', 'An apartment virtual tour published so buyers can walk through the layout online.']]
    }
  ];
  /* cover = first photo, alt = second */
  P.forEach(p => { p.cover = p.pics[0]; });

  /* ---------- news ---------- */
  const N = [
    { id: 'canton-fair-2026', t: 'Visit to the Canton Fair 2026', cat: 'Company', when: '2026', img: yt('wA1kLx6GVW8'), video: 'wA1kLx6GVW8', short: true, p: 'The S. M. Group team visited the hardware and construction materials section of the Canton Fair in Guangzhou, China, meeting doors, windows and wardrobe companies.' },
    { id: 'byd-ev', t: 'BYD China honours S. M. Builders as an early leader in EV-enabled communities', cat: 'Recognition', when: 'Jan 2026', img: pic('2026/01/2-c.jpg'), link: 'https://www.linkedin.com/posts/startup-pakistan_bydchina-smbuilders-evcommunities-activity-7412453854920826880-1gNo/', linkLabel: 'Read on LinkedIn', p: 'Startup Pakistan featured S. M. Builders & Developers as an early leader in building solar residences and EV-facilitated communities in Pakistan.' },
    { id: 'burj-serviced', t: 'Burj Al Jinnah introduces premium serviced apartments', cat: 'Projects', when: 'Jan 2026', img: pic('2026/01/1-c.jpg'), link: 'https://www.linkedin.com/posts/startup-pakistan_burjaljinnahresidential-luxuryliving-premiumshowrooms-activity-7412059367535079424-RCkA/', linkLabel: 'Read on LinkedIn', p: 'Karachi\'s first serviced and semi-furnished apartments with spacious showrooms and 100% electricity load backup, in Spanish-inspired architecture on Main Jinnah Avenue.' },
    { id: 'smhouse-may-2026', t: 'S. M. House: 7th floor slab complete', cat: 'Construction', when: 'May 2026', img: pic('2024/08/elevation-1.jpg'), p: 'Within 15 months, the basement, ground and seven floors, together with the final 9th slab, have been cast using post-tensioning technology at S. M. House.' },
    { id: 'company-profile', t: 'S. M. Group company profile', cat: 'Company', when: 'May 2026', img: pic('2026/05/news-and-events-sm-builders-14.jpg'), link: U + '2026/05/SM-Group-Company-Profile.pdf', linkLabel: 'Open the PDF', p: 'The S. M. Group company profile: the group\'s story since 1967, its ventures and its projects.' },
    { id: 'completion', t: 'Burj Al Jinnah project completion certificate', cat: 'Projects', when: '2025', img: pic('2025/12/news-and-events-sm-builders-12.jpg'), link: U + '2024/04/Project-Update-With-Completion-Certificate.pdf', linkLabel: 'Open the PDF', p: 'The completion certificate for Burj Al Jinnah has been acquired, with a project update shared with clients.' },
    { id: 'pak-cables-wiring', t: 'Wiring accessories by Pakistan Cables', cat: 'Partnerships', when: 'Jun 2025', img: pic('2025/06/news-and-events-sm-builders-13.jpg'), link: 'https://www.facebook.com/share/1LCY8yjgWD/', linkLabel: 'See on Facebook', p: 'Burj Al Jinnah is powered with Pakistan Cables wiring and wiring accessories throughout.' },
    { id: 'materials', t: 'Top shelf materials', cat: 'Projects', when: '2024', img: pic('2024/05/news-and-events-sm-builders-10.jpg'), p: 'Grohe sanitary, Kohler high-speed A/C elevators, Pakistan Cables, Envicrete blocks, Agha and Amreli steel, ERA water pipes, Google Smart Home and RFID smart access.' },
    { id: 'architect', t: 'Finalized by the architect', cat: 'Projects', when: 'Apr 2024', img: pic('2024/04/news-and-events-sm-builders-11.jpg'), p: 'The final elevation of Burj Al Jinnah, signed off by the project architects.' },
    { id: 'grohe', t: 'Signing ceremony with Grohe', cat: 'Partnerships', when: 'Nov 2023', img: pic('2024/01/news-and-events-sm-builders-02-1.jpg'), link: U + '2023/11/Deal-Finalized-with-Grohe-Sanitary-Fittings.pdf', linkLabel: 'Open the PDF', p: 'Deal finalized with Grohe for sanitary fittings across Burj Al Jinnah.' },
    { id: 'governor', t: 'Meet-up with the Governor of Sindh at Governor House', cat: 'Events', when: '2023', img: pic('2024/01/news-and-events-sm-builders-03-1.jpg'), link: 'https://www.facebook.com/SMBuildersDeveloper/videos/1073608023619299/', linkLabel: 'Watch on Facebook', p: 'The S. M. Builders team met the Governor of Sindh at Governor House, Karachi.' },
    { id: 'agha', t: 'Deal finalized with Agha Steel', cat: 'Partnerships', when: 'Apr 2023', img: pic('2024/01/news-and-events-sm-builders-09-1.jpg'), link: U + '2023/04/Final-Deal-Shared-On-Agha-Steel-Social-Media.pdf', linkLabel: 'Open the PDF', p: 'Agha Steel signed as a structural steel supplier for Burj Al Jinnah.' },
    { id: 'dgkhan', t: 'Deal finalized with D.G. Khan Cement', cat: 'Partnerships', when: 'Apr 2023', img: pic('2024/01/news-and-events-sm-builders-01-1.jpg'), link: U + '2023/04/Deal-Finalized-with-D.G-khan-Cement.pdf', linkLabel: 'Open the PDF', p: 'D.G. Khan Cement signed as a cement supplier for the project.' },
    { id: 'envicrete', t: 'Deal finalized with Envicrete', cat: 'Partnerships', when: 'Apr 2023', img: pic('2024/01/news-and-events-sm-builders-05-1.jpg'), link: U + '2023/04/Deal-finalized-with-Envicrete-2.pdf', linkLabel: 'Open the PDF', p: 'Envicrete blocks chosen for Burj Al Jinnah.' },
    { id: 'scenery', t: 'A window of refreshing scenery', cat: 'Projects', when: 'Apr 2023', img: pic('2024/01/meditation.jpg'), p: 'Wide, refreshing 360° views from Burj Al Jinnah over the bungalow area of Malir Cantt, with construction rising at two floors every month.' },
    { id: 'electricity', t: 'Electricity work', cat: 'Construction', when: 'Feb 2023', img: pic('2024/01/news-and-events-sm-builders-06-1.jpg'), gallery: ['2023/02/IMG1.jpg', '2023/02/IMG3.jpg', '2023/02/IMG4.jpg', '2023/02/IMG5.jpg'].map(x => pic(x)), p: 'Transformers and electrical panels installed on site for Burj Al Jinnah.' },
    { id: 'pumping', t: 'Dedicated water pumping station', cat: 'Construction', when: 'Feb 2023', img: pic('2024/01/news-and-events-sm-builders-07-1.jpg'), gallery: ['2023/02/1-scaled.jpg', '2023/02/2-scaled.jpg', '2023/02/3-scaled.jpg', '2023/02/4-scaled.jpg', '2023/02/5-scaled.jpg'].map(x => pic(x)), p: 'A dedicated water pumping station for Burj Al Jinnah, sanction order number B-149.' },
    { id: 'client-meetup', t: 'Client meet-up', cat: 'Events', when: '2023', img: pic('2024/01/news-and-events-sm-builders-08-1.jpg'), link: 'https://www.facebook.com/SMBuildersDeveloper/videos/323637786851484/', linkLabel: 'Watch on Facebook', p: 'An evening with Burj Al Jinnah clients to share project progress.' },
    { id: 'pak-cables', t: 'Partnership with Pakistan Cables', cat: 'Partnerships', when: 'Feb 2023', img: pic('2023/02/pakcable-300x300.jpg'), link: 'https://www.linkedin.com/posts/pakistan-cables-limited_ignitepossibilities-pakistancables-activity-7026428987039956992-bLSB', linkLabel: 'Read on LinkedIn', p: 'Pakistan Cables powers Burj Al Jinnah.' }
  ];

  /* ---------- affiliations & ventures ---------- */
  const AFF = [['ABAD', 'Association of Builders & Developers', '2023/11/abad-logo.jpg'], ['KCCI', 'Karachi Chamber of Commerce & Industry', '2023/11/kcoc-logo.jpg'], ['PCATP', 'Pakistan Council of Architects & Town Planners', '2023/11/peatp-logo.jpg'], ['PEC', 'Pakistan Engineering Council', '2023/11/pec-logo.jpg'], ['SBCA', 'Sindh Building Control Authority', '2023/11/sbca-logo.jpg'], ['SEPA', 'Sindh Environmental Protection Agency', '2023/11/sepa-logo.jpg'], ['CAA', 'Civil Aviation Authority', '2023/11/PCA-logo.jpg'], ['PAF', 'Pakistan Air Force', '2023/11/PAF-logo.jpg']]
    .map(a => Object.assign({ n: a[0], full: a[1] }, pic(a[2])));
  const VEN = [['S. M. House', 'Where business finds its home', '2024/11/logos-04.png'], ['SM Public Academy', '50 years in educational excellence', 'elementor/thumbs/sm-school-logo-qg427k64s9fia6oka4qvk0o1rtrv8zl7vtw0k6h4v4.jpeg'], ['Bella Vista', 'The luxury banquet', 'elementor/thumbs/Untitled-design-3-q0vwf0wu8ir1i2c3vocau5myrqg6uh6u0g6t3s5jgw.png'], ['S.M. Foods Preparation', 'Co. L.L.C', '2024/11/logos-01.png'], ['Express Drop', 'Delivery services Co. L.L.C', '2024/11/logos-02-1.png'], ['Grace Tek Drive', 'Auto spare parts & components', '2024/11/logos-03.png']]
    .map(a => Object.assign({ n: a[0], t: a[1] }, pic(a[2])));
  const BUILT = ['Grohe', 'Kohler', 'Pakistan Cables', 'Envicrete', 'Agha Steel', 'Amreli Steel', 'D.G. Khan Cement', 'ERA', 'Google Smart Home'];

  /* ---------- FAQ ---------- */
  const FAQ = [
    ['Is Burj Al Jinnah ready to move in?', 'The completion certificate has been acquired and the building is in its final finishing phase. Apartments are serviced and semi-furnished, and possession will be handed over very soon. Call 03-111-756-111 for the latest handover date.'],
    ['What payment plans do you offer?', 'Burj Al Jinnah: 30% down payment and an easy 42-month plan. S. M. House: 25% at booking, 70% in 20 monthly instalments and 5% at possession, with an extra 10% for corner outlets. For S. M. Axis, ask the sales team for the current plan.'],
    ['What are the S. M. House rates?', 'Published floor-wise gross rates per sq ft: 1st floor Rs 46,000, 2nd Rs 43,000, 3rd and 4th Rs 40,000, 5th and 6th Rs 38,000, and the 7th floor with rooftop Rs 52,000. Please confirm current rates with sales before booking.'],
    ['How many apartments are in S. M. Axis, and what sizes?', 'S. M. Axis has 83 apartments on Ground + 22 floors. All are 3-bed, in five layouts: Type A 1,597, A1 1,465, B 1,173, B1 1,127 and B2 1,072 sq ft net.'],
    ['Do apartments come with parking?', 'Yes. S. M. Axis has five dedicated parking floors with RFID smart access and a reserved 8 × 16 ft slot for every apartment. Burj Al Jinnah and S. M. House both have basement parking.'],
    ['Are your projects approved?', 'Burj Al Jinnah is approved by SBCA and MDA and registered in the Amnesty Scheme. S. M. House is leased and SBCA-approved. S. M. Builders is affiliated with ABAD, KCCI, PEC and the Pakistan Council of Architects & Town Planners.'],
    ['Can I visit the site?', 'Yes. Burj Al Jinnah is at Main Jinnah Avenue (also our head office); S. M. House and S. M. Axis have site offices in North Nazimabad. Call or WhatsApp to book a visit.'],
    ['How long has S. M. Builders been building?', 'S. M. Group began its journey in 1967. The group has built residential complexes, banquet halls and educational institutions in Karachi.']
  ];

  /* ---------- every image, for images.txt ---------- */
  const ALL = () => { const m = new Map(); const add = x => x && x.src && m.set(x.src, x.fb);
    P.forEach(p => { p.pics.forEach(add); (p.extra || []).forEach(add); p.plans.forEach(x => add(x.img)); });
    N.forEach(n => { add(n.img); (n.gallery || []).forEach(add); }); AFF.forEach(add); VEN.forEach(add); return m; };

  return { P, N, AFF, VEN, BUILT, FAQ, C, U, pic, yt, ALL };
})();
