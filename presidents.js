var presidents = [
	{"born": 2353713, "term_began": 2374600, "name": "George Washington", "died": 2378480, "term_ended": 2377465, "party": "None", "url": "George_Washington.jpg"}, 
	{"born": 2355059, "term_began": 2377465, "name": "John Adams", "died": 2388178, "term_ended": 2378925, "party": "Federalist", "url": "John_Adams.jpg"}, 
	{"born": 2357781, "term_began": 2378925, "name": "Thomas Jefferson", "died": 2388178, "term_ended": 2381847, "party": "Democratic-Republican", "url": "Thomas_Jefferson.jpg"}, 
	{"born": 2360675, "term_began": 2381847, "name": "James Madison", "died": 2391825, "term_ended": 2384769, "party": "Democratic-Republican", "url": "James_Madison.jpg"}, 
	{"born": 2363275, "term_began": 2384769, "name": "James Monroe", "died": 2390004, "term_ended": 2387691, "party": "Democratic-Republican", "url": "James_Monroe.jpg"}, 
	{"born": 2366636, "term_began": 2387691, "name": "John Quincy Adams", "died": 2396082, "term_ended": 2389152, "party": "Democratic-Republican", "url": "John_Quincy_Adams.jpg"}, 
	{"born": 2366518, "term_began": 2389152, "name": "Andrew Jackson", "died": 2395092, "term_ended": 2392074, "party": "Democratic", "url": "Andrew_Jackson.jpg"}, 
	{"born": 2372262, "term_began": 2392074, "name": "Martin Van Buren", "died": 2401347, "term_ended": 2393535, "party": "Democratic", "url": "Martin_Van_Buren.jpg"}, 
	{"born": 2368676, "term_began": 2393535, "name": "William Harrison", "died": 2393566, "term_ended": 2393566, "party": "Whig", "url": "William_Harrison.jpg"}, 
	{"born": 2374933, "term_began": 2393566, "name": "John Tyler", "died": 2401160, "term_ended": 2394996, "party": "Whig", "url": "John_Tyler.jpg"}, 
	{"born": 2376977, "term_began": 2394996, "name": "James Polk", "died": 2396560, "term_ended": 2396457, "party": "Democratic", "url": "James_Polk.jpg"}, 
	{"born": 2372982, "term_began": 2396457, "name": "Zachary Taylor", "died": 2396949, "term_ended": 2396949, "party": "Whig", "url": "Zachary_Taylor.jpg"}, 
	{"born": 2378504, "term_began": 2396949, "name": "Millard Fillmore", "died": 2405592, "term_ended": 2397918, "party": "Whig", "url": "Millard_Fillmore.jpg"}, 
	{"born": 2380285, "term_began": 2397918, "name": "Franklin Pierce", "died": 2403980, "term_ended": 2399379, "party": "Democratic", "url": "Franklin_Pierce.jpg"}, 
	{"born": 2375323, "term_began": 2399379, "name": "James Buchanan", "died": 2403486, "term_ended": 2400840, "party": "Democratic", "url": "James_Buchanan.jpg"}, 
	{"born": 2381827, "term_began": 2400840, "name": "Abraham Lincoln", "died": 2402343, "term_ended": 2402343, "party": "Republican", "url": "Abraham_Lincoln.jpg"}, 
	{"born": 2381782, "term_began": 2402343, "name": "Andrew Johnson", "died": 2406102, "term_ended": 2403762, "party": "Democratic", "url": "Andrew_Johnson.jpg"}, 
	{"born": 2386649, "term_began": 2403762, "name": "Ulysses S. Grant", "died": 2409747, "term_ended": 2406684, "party": "Republican", "url": "Ulysses_Grant.jpg"}, 
	{"born": 2386809, "term_began": 2406684, "name": "Rutherford B. Hayes", "died": 2412482, "term_ended": 2408145, "party": "Republican", "url": "Rutherford_Hayes.jpg"}, 
	{"born": 2390142, "term_began": 2408145, "name": "James Garfield", "died": 2408344, "term_ended": 2408344, "party": "Republican", "url": "James_Garfield.jpg"}, 
	{"born": 2389367, "term_began": 2408344, "name": "Chester A. Arthur", "died": 2410230, "term_ended": 2409606, "party": "Republican", "url": "Chester_Arthur.jpg"}, 
	{"born": 2392088, "term_began": 2409606, "name": "Grover Cleveland", "died": 2418117, "term_ended": 2411067, "party": "Democratic", "url": "Grover_Cleveland.jpg"}, 
	{"born": 2390782, "term_began": 2411067, "name": "Benjamin Harrison", "died": 2415457, "term_ended": 2412528, "party": "Republican", "url": "Benjamin_Harrison.jpg"}, 
	{"born": 2392088, "term_began": 2412528, "name": "Grover Cleveland", "died": 2418117, "term_ended": 2413989, "party": "Democratic", "url": "Grover_Cleveland.jpg"}, 
	{"born": 2394231, "term_began": 2413989, "name": "William McKinley", "died": 2415642, "term_ended": 2415642, "party": "Republican", "url": "William_McKinley.jpg"}, 
	{"born": 2399981, "term_began": 2415642, "name": "Theodore Roosevelt", "died": 2421965, "term_ended": 2418370, "party": "Republican", "url": "Theodore_Roosevelt.jpg"}, 
	{"born": 2399574, "term_began": 2418370, "name": "William Howard Taft", "died": 2426044, "term_ended": 2419831, "party": "Republican", "url": "Howard_Taft.jpg"}, 
	{"born": 2399313, "term_began": 2419831, "name": "Woodrow Wilson", "died": 2423819, "term_ended": 2422753, "party": "Democratic", "url": "Woodrow_Wilson.jpg"}, 
	{"born": 2402544, "term_began": 2422753, "name": "Warren Harding", "died": 2423634, "term_ended": 2423634, "party": "Republican", "url": "Warren_Harding.jpg"}, 
	{"born": 2404980, "term_began": 2423634, "name": "Calvin Coolidge", "died": 2427078, "term_ended": 2425675, "party": "Republican", "url": "Calvin_Coolidge.jpg"}, 
	{"born": 2405747, "term_began": 2425675, "name": "Herbert Hoover", "died": 2438689, "term_ended": 2427136, "party": "Republican", "url": "Herbert_Hoover.jpg"}, 
	{"born": 2408477, "term_began": 2427136, "name": "Franklin D. Roosevelt", "died": 2431558, "term_ended": 2431558, "party": "Democratic", "url": "Franklin_Roosevelt.jpg"}, 
	{"born": 2409306, "term_began": 2431558, "name": "Harry S. Truman", "died": 2441678, "term_ended": 2434398, "party": "Democratic", "url": "Harry_Truman.jpg"}, 
	{"born": 2411656, "term_began": 2434398, "name": "Dwight D. Eisenhower", "died": 2440309, "term_ended": 2437320, "party": "Republican", "url": "Dwight_Eisenhower.jpg"}, 
	{"born": 2421378, "term_began": 2437320, "name": "John F. Kennedy", "died": 2438356, "term_ended": 2438356, "party": "Democratic", "url": "John_Kennedy.jpg"}, 
	{"born": 2418181, "term_began": 2438356, "name": "Lyndon B. Johnson", "died": 2441705, "term_ended": 2440242, "party": "Democratic", "url": "Lyndon_Johnson.jpg"}, 
	{"born": 2419777, "term_began": 2440242, "name": "Richard Nixon", "died": 2449465, "term_ended": 2442269, "party": "Republican", "url": "Richard_Nixon.jpg"}, 
	{"born": 2419963, "term_began": 2442269, "name": "Gerald Ford", "died": 2454096, "term_ended": 2443164, "party": "Republican", "url": "Gerald_Ford.jpg"}, 
	{"born": 2424060, "term_began": 2443164, "name": "Jimmy Carter", "died": -1, "term_ended": 2444625, "party": "Democratic", "url": "Jimmy_Carter.jpg"}, 
	{"born": 2419074, "term_began": 2444625, "name": "Ronald Reagan", "died": 2453162, "term_ended": 2447547, "party": "Republican", "url": "Ronald_Reagan.jpg"}, 
	{"born": 2423949, "term_began": 2447547, "name": "George H. W. Bush", "died": -1, "term_ended": 2449008, "party": "Republican", "url": "George_H_W_Bush.jpg"}, 
	{"born": 2432052, "term_began": 2449008, "name": "Bill Clinton", "died": -1, "term_ended": 2451930, "party": "Democratic", "url": "Bill_Clinton.jpg"}, 
	{"born": 2432008, "term_began": 2451930, "name": "George W. Bush", "died": -1, "term_ended": 2454852, "party": "Republican", "url": "George_W_Bush.jpg"}, 
	{"born": 2437516, "term_began": 2454852, "name": "Barack H. Obama", "died": -1, "term_ended": -1, "party": "Democratic", "url": "Barack_Obama.jpg"}
];
