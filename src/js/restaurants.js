var csv_data = "ExtractDate,FHRSID,BusinessName,BusinessType,BusinessTypeID,AddressLine2,AddressLine3,PostCode,RatingDate,Longitude,Latitude\n\
14/02/2014,19429,(Starbucks),Restaurant/Cafe/Canteen,1,390 Provan Walk,Glasgow,G34 9DL,01/11/2011,-4.136909,55.872982\n\
14/02/2014,360857,1478 Social Club,Restaurant/Cafe/Canteen,1,11 Dove Street,Glasgow,G53 7BS,26/04/2012,-4.362002,55.812693\n\
14/02/2014,36363,1call Direct,Restaurant/Cafe/Canteen,1,116 West Regent Street,Glasgow,G2 2QD,23/07/2013,-4.258314,55.863552\n\
14/02/2014,36362,2 Go,Restaurant/Cafe/Canteen,1,397 Dumbarton Road,Glasgow,G11 6BE,03/09/2013,-4.308613,55.870617\n\
14/02/2014,507934,200 St Vincent Street,Restaurant/Cafe/Canteen,1,200 St Vincent Street,Glasgow,G2 5SG,06/02/2013,-4.260957,55.86229\n\
14/02/2014,95689,279 Cafe Bistro,Restaurant/Cafe/Canteen,1,279 Dumbarton Road,Glasgow,G11 6AB,22/05/2012,-4.303939,55.870516\n\
14/02/2014,110587,32nd Signal Regiment (v),Restaurant/Cafe/Canteen,1,21 Jardine Street,Glasgow,G20 6JU,24/05/2011,-4.277246,55.877088\n\
14/02/2014,10859,7 Day Catering Ltd  -Staff Canteen,Restaurant/Cafe/Canteen,1,53 Coltness Street,Glasgow,G33 4JD,13/09/2011,-4.152553,55.863938\n\
14/02/2014,406755,7th Heaven,Restaurant/Cafe/Canteen,1,15 Elmbank Gardens,Glasgow,G2 4NQ,06/06/2012,-4.270439,55.865108\n\
14/02/2014,556088,916 - Diner,Restaurant/Cafe/Canteen,1,916 Sauchiehall Street,Glasgow,G3 7TF,06/06/2013,-4.284479,55.865774\n\
14/02/2014,31114,Abercromby Cafe,Restaurant/Cafe/Canteen,1,168 Abercromby Street,Glasgow,G40 2RZ,22/10/2013,-4.229148,55.852688\n\
14/02/2014,36313,Abercromby Catering And Vending,Restaurant/Cafe/Canteen,1,8 Arrol Road,Glasgow,G40 3DQ,12/02/2013,-4.213875,55.84625\n\
14/02/2014,35898,A-Cakes,Restaurant/Cafe/Canteen,1,39 Milnbank Street,Glasgow,G31 3AQ,28/06/2010,-4.221675,55.864803\n\
14/02/2014,537382,Ad Lib,Restaurant/Cafe/Canteen,1,33 Ingram Street,Glasgow,G1 1HA,23/07/2013,-4.242358,55.859008\n\
14/02/2014,91632,Agra Restaurant,Restaurant/Cafe/Canteen,1,995 Crow Road,Glasgow,G13 1JP,05/07/2013,-4.32204,55.893903\n\
14/02/2014,315982,AJ\'s Sandwich Shop,Restaurant/Cafe/Canteen,1,14 Tollcross Road,Glasgow,G31 4XD,20/06/2012,-4.19669,55.850836\n\
14/02/2014,360826,Akbars Balti Restaurant,Restaurant/Cafe/Canteen,1,573 Sauchiehall Street,Glasgow,G3 7PQ,09/10/2012,-4.273083,55.866048\n\
14/02/2014,36482,Alba Cafe,Restaurant/Cafe/Canteen,1,481 Great Western Road,Glasgow,G12 8HL,17/05/2011,-4.282144,55.875281\n\
14/02/2014,22585,Alba Catering Ltd,Restaurant/Cafe/Canteen,1,2 Haghill Road,Glasgow,G31 3SR,08/11/2011,-4.202495,55.858569\n\
14/02/2014,188093,Albacore,Restaurant/Cafe/Canteen,1,200 Carlisle Street,Glasgow,,16/12/2013,-4.242509842,55.85779953\n\
14/02/2014,19526,Albacore (Scottish Qualifications Authority),Restaurant/Cafe/Canteen,1,58 Robertson Street,Glasgow,G2 8DU,22/10/2009,-4.260464,55.857095\n\
14/02/2014,49104,Alberto\'s,Restaurant/Cafe/Canteen,1,506 Alexandra Parade,Glasgow,G31 3BQ,15/05/2013,-4.218008,55.863548\n\
14/02/2014,360864,Albion Sports And Social Club,Restaurant/Cafe/Canteen,1,320 Halley Street,Glasgow,G13 4DJ,14/11/2013,-4.378986,55.891898\n\
14/02/2014,66160,Alishan Tandoori,Restaurant/Cafe/Canteen,1,250 Battlefield Road,Glasgow,G42 9HU,24/01/2013,-4.262139,55.824889\n\
14/02/2014,49065,All In One,Restaurant/Cafe/Canteen,1,12 Marne Street,Glasgow,G31 2TD,05/06/2013,-4.212686,55.8627\n\
14/02/2014,15468,Alla Turca Restuarant,Restaurant/Cafe/Canteen,1,192 Pitt Street,Glasgow,G2 4DY,15/10/2013,-4.26452,55.865289\n\
14/02/2014,116807,Allied Distillers Canteen,Restaurant/Cafe/Canteen,1,1780 London Road,Glasgow,G32 8XA,19/10/2005,-4.192206,55.838729\n\
14/02/2014,548299,Almi\'s Cafeteria,Restaurant/Cafe/Canteen,1,600 Eglinton Street,Glasgow,G5 9RR,07/11/2013,-4.262232,55.844633\n\
14/02/2014,511143,Al\'s Diner,Restaurant/Cafe/Canteen,1,70 Cathedral Street,Glasgow,G4 0RN,08/10/2013,,\n\
14/02/2014,112421,AM PM,Restaurant/Cafe/Canteen,1,16 Killermont Street,Glasgow,G2 3NW,05/11/2013,-4.25203,55.865428\n\
14/02/2014,133348,Amalfi Pizzeria,Restaurant/Cafe/Canteen,1,148 West Nile Street,Glasgow,G1 2RQ,14/02/2011,-4.253893,55.863929\n\
14/02/2014,19637,Amarone,Restaurant/Cafe/Canteen,1,4 Nelson Mandela Place,Glasgow,,09/07/2012,-4.2535556,55.86203936\n\
14/02/2014,568571,Amateur Football Association,Restaurant/Cafe/Canteen,1,34 Bridge Street,Glasgow,G5 9HU,04/07/2013,-4.259031,55.853338\n\
14/02/2014,133364,Amber Regent,Restaurant/Cafe/Canteen,1,50 West Regent Street,Glasgow,G2 2RA,22/02/2012,-4.256413,55.86329\n\
14/02/2014,30936,Amber Restaurant,Restaurant/Cafe/Canteen,1,132 Byres Road,Glasgow,G12 8TD,05/10/2011,-4.295156,55.873646\n\
14/02/2014,480311,Amber\'s Cafe,Restaurant/Cafe/Canteen,1,18 Balmore Road,Glasgow,G22 6RN,26/11/2013,-4.255088,55.884273\n\
14/02/2014,31320,Amore Ristorante,Restaurant/Cafe/Canteen,1,30 Ingram Street,Glasgow,G1 1EZ,01/07/2013,-4.242543,55.859445\n\
14/02/2014,45671,Amros Tandoori,Restaurant/Cafe/Canteen,1,1228 Royston Road,Glasgow,G33 1EX,19/06/2013,-4.193152,55.878212\n\
14/02/2014,31211,AMT Coffee,Restaurant/Cafe/Canteen,1,79 Gordon Street,Glasgow,G1 3SQ,16/09/2009,-4.258211,55.859302\n\
14/02/2014,102350,Amt Expresso (Queen St Station),Restaurant/Cafe/Canteen,1,38 George Square,Glasgow,G1 2AF,15/09/2010,-4.251204,55.862487\n\
14/02/2014,30935,An Clachan Cafe Ltd,Restaurant/Cafe/Canteen,1,5 La Belle Place,Glasgow,G3 7LH,12/03/2013,-4.27954,55.866593\n\
14/02/2014,132673,Anarkali Restaurant,Restaurant/Cafe/Canteen,1,531 Victoria Road,Glasgow,G42 8BH,04/12/2013,-4.265291,55.83407\n\
14/02/2014,48041,Anatolia,Restaurant/Cafe/Canteen,1,140 St Vincent Street,Glasgow,G2 5LA,25/07/2013,-4.25852,55.861876\n\
14/02/2014,507922,Andell\'s Restauarnt And Tearoom,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,04/02/2013,-4.258023,55.865157\n\
14/02/2014,315985,Anne\'s Snack Bar,Restaurant/Cafe/Canteen,1,183 Fordneuk Street,Glasgow,G40 3SA,10/04/2012,-4.218836,55.849486\n\
14/02/2014,49131,Another Piece,Restaurant/Cafe/Canteen,1,387 Great Western Road,Glasgow,G4 9HY,05/04/2013,-4.277598,55.873819\n\
14/02/2014,128362,Anti Pasti,Restaurant/Cafe/Canteen,1,305 Sauchiehall Street,Glasgow,G2 3HQ,01/02/2012,-4.263947,55.865326\n\
14/02/2014,26768,Aramark,Restaurant/Cafe/Canteen,1,200 Glentanar Road,Glasgow,G22 7XS,11/06/2010,-4.259779,55.895646\n\
14/02/2014,360791,Ardery Street Masonic Halls,Restaurant/Cafe/Canteen,1,9 Ardery Street,Glasgow,G11 7SX,30/04/2012,-4.31445,55.871478\n\
14/02/2014,31127,Arisaig,Restaurant/Cafe/Canteen,1,71 Albion Street,Glasgow,G1 1NY,16/04/2013,-4.243579,55.858573\n\
14/02/2014,31015,Arnold Clark Canteen,Restaurant/Cafe/Canteen,1,459 Crow Road,Glasgow,G11 7DN,15/05/2012,-4.327257,55.882201\n\
14/02/2014,49071,Aroma,Restaurant/Cafe/Canteen,1,5 Cadogan Street,Glasgow,G2 6QE,19/04/2013,-4.260169,55.859446\n\
14/02/2014,132908,Arta,Restaurant/Cafe/Canteen,1,13 Walls Street,Glasgow,G1 1PA,03/01/2013,-4.24317,55.857852\n\
14/02/2014,36128,Artisan Roast,Restaurant/Cafe/Canteen,1,15 Gibson Street,Glasgow,G12 8NU,11/03/2013,-4.282448,55.8723\n\
14/02/2014,49165,Arty Tarts,Restaurant/Cafe/Canteen,1,3 McLaren Crescent,Glasgow,G20 0LD,10/11/2011,-4.285638,55.895285\n\
14/02/2014,10067,Asda (Restaurant  and Staff Canteen),Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,07/10/2009,-4.199841,55.853449\n\
14/02/2014,21857,Asda Cafe/Canteen,Restaurant/Cafe/Canteen,1,555 Prospecthill Road,Glasgow,G42 0AE,13/12/2011,-4.246845,55.830176\n\
14/02/2014,31299,Asda Customer Restaurant And Canteen,Restaurant/Cafe/Canteen,1,1 Monument Drive,Glasgow,G33 1AD,14/04/2011,-4.186996,55.890984\n\
14/02/2014,56095,Ashoka Ashton Lane,Restaurant/Cafe/Canteen,1,19 Ashton Lane,Glasgow,G12 8SJ,10/06/2013,-4.292992,55.87463\n\
14/02/2014,581091,Ashoka At The Quay,Restaurant/Cafe/Canteen,1,3 Springfield Quay,Glasgow,G5 8NP,04/12/2013,-4.274804,55.855303\n\
14/02/2014,86684,Ashoka South Side,Restaurant/Cafe/Canteen,1,268 Clarkston Road,Glasgow,G44 3EA,23/01/2012,-4.269606,55.812187\n\
14/02/2014,315952,Ashoka West End,Restaurant/Cafe/Canteen,1,1284 Argyle Street,Glasgow,G3 8AB,20/03/2013,-4.290045,55.866929\n\
14/02/2014,129774,Asia Style,Restaurant/Cafe/Canteen,1,185 St Georges Road,Glasgow,G3 6JD,22/04/2013,-4.269402,55.869792\n\
14/02/2014,406775,Asian Gourmet,Restaurant/Cafe/Canteen,1,17 West Princes Street,Glasgow,G4 9BS,28/01/2014,-4.270026,55.870077\n\
14/02/2014,371804,Ask Italian,Restaurant/Cafe/Canteen,1,3 Port Dundas Place,Glasgow,G2 3LD,18/06/2013,-4.253253,55.865298\n\
14/02/2014,427404,Assams,Restaurant/Cafe/Canteen,1,57 West Regent Street,Glasgow,G2 2AE,18/12/2013,-4.256581,55.862882\n\
14/02/2014,17626,Assissi House,Restaurant/Cafe/Canteen,1,41 Easterhill Street,Glasgow,,16/04/2012,-4.17422278,55.84143226\n\
14/02/2014,34308,Athena Greek Taverna,Restaurant/Cafe/Canteen,1,1116 Argyle Street,Glasgow,G3 8TD,23/08/2012,-4.284857,55.865138\n\
14/02/2014,495620,Athena Greek Taverna,Restaurant/Cafe/Canteen,1,99 Hope Street,Glasgow,G2 6LL,07/01/2014,-4.259448,55.86079\n\
14/02/2014,22941,Atrium,Restaurant/Cafe/Canteen,1,121 University Avenue,Glasgow,G12 8SP,05/12/2012,-4.293732,55.874158\n\
14/02/2014,18898,Atrium Coffee House,Restaurant/Cafe/Canteen,1,58 Cresswell Street,Glasgow,G12 8AP,06/08/2013,-4.291748,55.876576\n\
14/02/2014,30440,Aubergine,Restaurant/Cafe/Canteen,1,356 Victoria Road,Glasgow,G42 8YW,22/11/2011,-4.264837,55.837512\n\
14/02/2014,129741,Aulds,Restaurant/Cafe/Canteen,1,55 St Enoch Square,Glasgow,,06/09/2010,-4.25558113,55.85737272\n\
14/02/2014,495618,Auntie Anne\'s,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,,03/01/2013,,\n\
14/02/2014,35884,Auntie M\'s,Restaurant/Cafe/Canteen,1,2 Clouston Street,Glasgow,G20 8QS,23/06/2010,-4.2847,55.880698\n\
14/02/2014,36252,Avenue G Cafe,Restaurant/Cafe/Canteen,1,291 Byres Road,Glasgow,G12 8TL,08/10/2013,-4.293342,55.875953\n\
14/02/2014,97344,Azure (Hospitality),Restaurant/Cafe/Canteen,1,150 Edmiston Drive,Glasgow,G51 2XD,31/05/2013,-4.308669,55.852452\n\
14/02/2014,34729,Azzurro,Restaurant/Cafe/Canteen,1,91 Cambridge Street,Glasgow,G3 6RU,08/03/2013,-4.259871,55.866965\n\
14/02/2014,145168,B and Q Cafe,Restaurant/Cafe/Canteen,1,21 Leggatston Road,Glasgow,G53 7RJ,10/05/2012,-4.339161,55.802839\n\
14/02/2014,45097,B and Q Cafe,Restaurant/Cafe/Canteen,1,40 Allerdyce Road,Glasgow,G15 6RX,11/05/2012,-4.377474,55.905094\n\
14/02/2014,129737,B.H.S. Plc,Restaurant/Cafe/Canteen,1,55 St Enoch Square,Glasgow,G1 4BW,21/09/2010,-4.254458,55.857412\n\
14/02/2014,556103,Babu Bombay Street Kitchen,Restaurant/Cafe/Canteen,1,186 West Regent Street,Glasgow,G2 4RU,06/06/2013,-4.261774,55.863964\n\
14/02/2014,466588,Babylon Cafe,Restaurant/Cafe/Canteen,1,9 Clyde Place,Glasgow,G5 8AA,09/01/2014,,\n\
14/02/2014,35943,Back 2 Angie\'s,Restaurant/Cafe/Canteen,1,330 Duke Street,Glasgow,G31 1QZ,08/09/2010,-4.222143,55.858171\n\
14/02/2014,26356,Baguette Express,Restaurant/Cafe/Canteen,1,297 Provan Walk,Glasgow,G34 9DY,21/02/2012,-4.138074,55.871218\n\
14/02/2014,48960,Ballito Bay,Restaurant/Cafe/Canteen,1,16 St Andrews Street,Glasgow,G1 5PD,11/08/2011,-4.24419,55.855308\n\
14/02/2014,594153,Bank Street Bar And Kitchen,Restaurant/Cafe/Canteen,1,54 Bank Street,Glasgow,G12 8LZ,15/01/2014,-4.284265,55.8733\n\
14/02/2014,120348,Bar Soba,Restaurant/Cafe/Canteen,1,11 Mitchell Lane,Glasgow,G1 3LX,18/02/2013,-4.255473,55.859487\n\
14/02/2014,315983,Bar Soba Byres Road,Restaurant/Cafe/Canteen,1,122 Byres Road,Glasgow,G12 8TB,24/10/2013,-4.295826,55.873085\n\
14/02/2014,23202,Bar Ten,Restaurant/Cafe/Canteen,1,10 Mitchell Lane,Glasgow,G1 3NU,20/05/2013,-4.255247,55.859995\n\
14/02/2014,14658,Barbarossa Restaurant,Restaurant/Cafe/Canteen,1,3 Clarkston Road,Glasgow,G44 4EF,26/03/2013,-4.261659,55.817726\n\
14/02/2014,19559,Barca Tapas And Cava Bar,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,23/07/2013,-4.253456,55.859156\n\
14/02/2014,460413,Barclays Wealth   (3rd Floor),Restaurant/Cafe/Canteen,1,300 Bath Street,Glasgow,G2 4JR,08/11/2013,-4.268847,55.865497\n\
14/02/2014,48941,Barolo Grill,Restaurant/Cafe/Canteen,1,94 Mitchell Street,Glasgow,G1 3NQ,18/02/2013,-4.255247,55.859995\n\
14/02/2014,66154,Battlefield Rest,Restaurant/Cafe/Canteen,1,55 Battlefield Road,Glasgow,G42 9JL,11/10/2013,-4.266264,55.827186\n\
14/02/2014,49111,Baxter Storey,Restaurant/Cafe/Canteen,1,40 Moffat Street,Glasgow,G5 0ND,19/04/2012,-4.242554,55.847159\n\
14/02/2014,594128,BaxterStorey,Restaurant/Cafe/Canteen,1,141 Bothwell Street,Glasgow,G2 7EQ,07/10/2013,-4.264012,55.861227\n\
14/02/2014,49055,Baxterstorey Ltd (Network Rail Canteen),Restaurant/Cafe/Canteen,1,58 Port Dundas Road,Glasgow,G4 0LQ,09/08/2013,-4.253444,55.867227\n\
14/02/2014,594122,Baxterstorey Scotland Ltd.,Restaurant/Cafe/Canteen,1,1 Carlton Place,Glasgow,G5 9DA,04/12/2013,-4.263942,55.8408\n\
14/02/2014,594121,Baxterstorey Scotland Ltd.,Restaurant/Cafe/Canteen,1,212 Saltmarket,Glasgow,G1 5JZ,04/12/2013,-4.246675,55.854076\n\
14/02/2014,23176,BBC Scotland HQ,Restaurant/Cafe/Canteen,1,40 Pacific Quay,Glasgow,G51 1DA,29/01/2014,-4.290943,55.858032\n\
14/02/2014,26838,BDP Ltd,Restaurant/Cafe/Canteen,1,15 Exchange Place,Glasgow,G1 3AN,23/08/2013,-4.253746,55.860022\n\
14/02/2014,612675,Bean Machine,Restaurant/Cafe/Canteen,1,32 Albion Street,Glasgow,G1 1LH,28/11/2013,-4.244412,55.857775\n\
14/02/2014,30419,Beanscene,Restaurant/Cafe/Canteen,1,1365 Argyle Street,Glasgow,G3 8AF,29/01/2013,-4.29177,55.867723\n\
14/02/2014,129167,Beanscene,Restaurant/Cafe/Canteen,1,19 Skirving Street,Glasgow,G41 3AB,15/08/2011,-4.280532,55.829798\n\
14/02/2014,10216,Beanscene,Restaurant/Cafe/Canteen,1,110 Battlefield Road,Glasgow,G42 9JT,22/02/2011,-4.265146,55.826083\n\
14/02/2014,10642,Beanscene Ltd,Restaurant/Cafe/Canteen,1,40 Woodlands Road,Glasgow,G3 6UR,05/10/2012,-4.272108,55.868241\n\
14/02/2014,52640,Beechwood Tavern,Restaurant/Cafe/Canteen,1,164 Ardmay Crescent,Glasgow,G44 4PP,15/10/2013,-4.247809,55.823354\n\
14/02/2014,124689,Bella Fresca,Restaurant/Cafe/Canteen,1,2093 Paisley Road West,Glasgow,G52 3JH,20/05/2010,-4.353494,55.845706\n\
14/02/2014,108511,Bella Italia,Restaurant/Cafe/Canteen,1,96 Hope Street,Glasgow,G2 6PH,08/08/2013,-4.258318,55.860873\n\
14/02/2014,112543,Bella Napoli,Restaurant/Cafe/Canteen,1,85 Kilmarnock Road,Glasgow,G41 3YR,09/09/2011,-4.282917,55.828531\n\
14/02/2014,594146,Bella Vita,Restaurant/Cafe/Canteen,1,597 Mosspark Boulevard,Glasgow,G52 1SB,10/10/2013,-4.333458,55.845127\n\
14/02/2014,15639,Bellahouston Sports Centre (Cafe),Restaurant/Cafe/Canteen,1,31 Bellahouston Drive,Glasgow,G52 1HH,22/06/2010,-4.324015,55.846159\n\
14/02/2014,101490,Bellgrove Hotel,Restaurant/Cafe/Canteen,1,607 Gallowgate,Glasgow,G40 2PG,27/08/2013,-4.222186,55.854997\n\
14/02/2014,360873,Belvidere Bowling Club,Restaurant/Cafe/Canteen,1,23 Silverdale Street,Glasgow,G31 4LE,07/06/2012,-4.200938,55.847138\n\
14/02/2014,35987,Bensons Cafe,Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,26/06/2012,-4.199841,55.853449\n\
14/02/2014,26315,\"Benson\'s Pantry (Inshops Unit 6, 7, 8)\",Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,24/04/2009,-4.199841,55.853449\n\
14/02/2014,480304,Best Chippy,Restaurant/Cafe/Canteen,1,55 Mount Annan Drive,Glasgow,G44 4RX,22/11/2012,-4.25474,55.823937\n\
14/02/2014,23319,Bibi\'s Cantina,Restaurant/Cafe/Canteen,1,599 Dumbarton Road,Glasgow,G11 6HY,19/02/2013,-4.317637,55.870501\n\
14/02/2014,19699,Biggar\'s Cafe,Restaurant/Cafe/Canteen,1,273 Sauchiehall Street,Glasgow,G2 3HQ,17/05/2012,-4.263947,55.865326\n\
14/02/2014,581125,Bikram Yoga Southside (and Juice Bar),Restaurant/Cafe/Canteen,1,32 Eastwood Avenue,Glasgow,G41 3NS,28/08/2013,-4.286243,55.827805\n\
14/02/2014,26801,Biscuit,Restaurant/Cafe/Canteen,1,17 Skirving Street,Glasgow,G41 3AB,11/04/2011,-4.280532,55.829798\n\
14/02/2014,548297,Bites \'N\' Pieces,Restaurant/Cafe/Canteen,1,99 Rockfield Road,Glasgow,G21 3DY,13/05/2013,-4.203947,55.889549\n\
14/02/2014,36251,Black Sheep Bistro,Restaurant/Cafe/Canteen,1,10 Clarendon Street,Glasgow,G20 7QD,23/05/2012,-4.268495,55.872603\n\
14/02/2014,131310,Blackhill Bowling Club,Restaurant/Cafe/Canteen,1,20 Tay Crescent,Glasgow,G33 2BQ,29/04/2009,-4.189009,55.871356\n\
14/02/2014,84941,Bluebird Cafe,Restaurant/Cafe/Canteen,1,510 Cathcart Road,Glasgow,G42 7BX,20/10/2011,-4.25734,55.837119\n\
14/02/2014,108510,Bombay Blues,Restaurant/Cafe/Canteen,1,41 Hope Street,Glasgow,G2 6AE,09/02/2011,-4.259536,55.859557\n\
14/02/2014,36487,Bonbons And Buttercream,Restaurant/Cafe/Canteen,1,7 Dryburgh Gardens,Glasgow,G20 6BT,13/12/2011,-4.277453,55.87899\n\
14/02/2014,448741,Boots The Chemists Ltd,Restaurant/Cafe/Canteen,1,200 Sauchiehall Street,Glasgow,G2 3EF,29/03/2006,-4.259931,55.865248\n\
14/02/2014,36149,Boyd Catering (Brookfield Construction Site),Restaurant/Cafe/Canteen,1,1345 Govan Road,Glasgow,G51 4TF,14/05/2012,-4.337594,55.863985\n\
14/02/2014,594144,Boyd\'s,Restaurant/Cafe/Canteen,1,2121 Paisley Road West,Glasgow,G52 3JL,10/10/2013,-4.35467,55.845612\n\
14/02/2014,128360,Bradfords,Restaurant/Cafe/Canteen,1,245 Sauchiehall Street,Glasgow,G2 3EZ,03/10/2012,-4.262562,55.865145\n\
14/02/2014,480298,Brambles Catering,Restaurant/Cafe/Canteen,1,188 Riverford Road,Glasgow,G43 2DE,21/11/2013,-4.288925,55.821005\n\
14/02/2014,49060,Bread + Butter,Restaurant/Cafe/Canteen,1,74 Buchanan Street,Glasgow,G1 3HA,11/03/2011,-4.25397,55.860018\n\
14/02/2014,607032,Bread Meats Bread,Restaurant/Cafe/Canteen,1,104 St Vincent Street,Glasgow,G2 5UB,09/01/2014,-4.255533,55.861625\n\
14/02/2014,56101,Brel,Restaurant/Cafe/Canteen,1,37 Ashton Lane,Glasgow,G12 8SJ,20/10/2013,-4.292992,55.87463\n\
14/02/2014,133366,Brian Maule At Chardon D\'Or,Restaurant/Cafe/Canteen,1,172 West Regent Street,Glasgow,,18/08/2010,-4.26149352,55.86369468\n\
14/02/2014,18545,Bridgeton Community Learning Centre,Restaurant/Cafe/Canteen,1,68 Dale Street,Glasgow,G40 4TL,21/02/2012,-4.222541,55.844979\n\
14/02/2014,29379,British Bakeries Canteen,Restaurant/Cafe/Canteen,1,783 Duke Street,Glasgow,G31 1LL,20/04/2012,-4.210019,55.858803\n\
14/02/2014,534333,Broad Street Cafe,Restaurant/Cafe/Canteen,1,60 Broad Street,Glasgow,G40 2QN,18/11/2013,-4.223796,55.850457\n\
14/02/2014,534357,Brooklands Caf�,Restaurant/Cafe/Canteen,1,1632 Great Western Road,Glasgow,G13 1HH,08/04/2013,-4.324127,55.890026\n\
14/02/2014,77482,Broomton Community Shop,Restaurant/Cafe/Canteen,1,42 Broomton Road,Glasgow,G21 3RU,19/03/2012,-4.203822,55.89693\n\
14/02/2014,200645,Brown\'s Bar and Brasserie,Restaurant/Cafe/Canteen,1,1 George Square,Glasgow,G2 1DY,20/01/2014,-4.250847,55.860453\n\
14/02/2014,606997,Brutti Compadres,Restaurant/Cafe/Canteen,1,35 Virginia Street,Glasgow,G1 1TN,13/08/2013,-4.250545,55.858544\n\
14/02/2014,460399,Buchanan Lodge,Restaurant/Cafe/Canteen,1,163 Wardie Road,Glasgow,G34 9EG,25/10/2012,-4.120015,55.867172\n\
14/02/2014,607019,Bull Leader,Restaurant/Cafe/Canteen,1,55 Union Street,Glasgow,G1 3RB,06/11/2013,-4.257325,55.859184\n\
14/02/2014,125754,Buon Giorno,Restaurant/Cafe/Canteen,1,1012 Pollokshaws Road,Glasgow,G41 2HG,28/10/2013,-4.278617,55.832008\n\
14/02/2014,444490,Burger King,Restaurant/Cafe/Canteen,1,102 Union Street,Glasgow,G1 3QW,25/08/2012,-4.256555,55.859962\n\
14/02/2014,511133,Burger King,Restaurant/Cafe/Canteen,1,6 Allerdyce Court,Glasgow,G15 6SA,26/02/2013,-4.376618,55.902864\n\
14/02/2014,511132,Burger King,Restaurant/Cafe/Canteen,1,1 Springfield Quay,Glasgow,G5 8NP,02/08/2013,-4.274804,55.855303\n\
14/02/2014,516675,Burger King,Restaurant/Cafe/Canteen,1,55 St Enoch Square,Glasgow,G1 4BW,04/09/2013,-4.254458,55.857412\n\
14/02/2014,562673,Burger Meats Bun,Restaurant/Cafe/Canteen,1,48 West Regent Street,Glasgow,G2 2RA,19/06/2013,-4.256413,55.86329\n\
14/02/2014,134212,Burnbank Bowling Club,Restaurant/Cafe/Canteen,1,235 Woodlands Road,Glasgow,G3 6NN,19/10/2004,-4.277658,55.871302\n\
14/02/2014,125768,Burrell Collection (The Burrell Cafe/Restaurant),Restaurant/Cafe/Canteen,1,2060 Pollokshaws Road,Glasgow,G43 1AT,28/03/2012,-4.303363,55.823261\n\
14/02/2014,48944,Buzzy Wares,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,11/01/2012,-4.253456,55.859156\n\
14/02/2014,460409,Byblos Cafe,Restaurant/Cafe/Canteen,1,6 Park Road,Glasgow,G4 9JG,22/07/2013,-4.278703,55.873853\n\
14/02/2014,48674,C/o Scottish Water,Restaurant/Cafe/Canteen,1,419 Balmore Road,Glasgow,G22 6NU,24/04/2013,-4.260865,55.890943\n\
14/02/2014,562692,Cafe,Restaurant/Cafe/Canteen,1,220 High Street,Glasgow,G4 0QW,11/07/2013,-4.239688,55.860657\n\
14/02/2014,612651,Cafe 13,Restaurant/Cafe/Canteen,1,794 Govan Road,Glasgow,G51 2YL,11/11/2013,-4.310615,55.862895\n\
14/02/2014,48871,Cafe Absolute,Restaurant/Cafe/Canteen,1,161 Byres Road,Glasgow,G12 8TS,24/01/2012,-4.295756,55.873787\n\
14/02/2014,568576,Cafe Amalfi,Restaurant/Cafe/Canteen,1,19 Carmunnock Road,Glasgow,G44 4TZ,19/11/2013,-4.256752,55.825042\n\
14/02/2014,24725,Cafe Andaluz,Restaurant/Cafe/Canteen,1,15 St Vincent Place,Glasgow,G1 2DW,09/10/2013,-4.252437,55.860864\n\
14/02/2014,90588,Cafe Andaluz,Restaurant/Cafe/Canteen,1,2 Cresswell Lane,Glasgow,G12 8AA,04/03/2011,-4.292252,55.875911\n\
14/02/2014,406756,Cafe Asia,Restaurant/Cafe/Canteen,1,1359 Barrhead Road,Glasgow,G53 7DA,07/06/2012,-4.362746,55.821792\n\
14/02/2014,119069,Cafe Avanti,Restaurant/Cafe/Canteen,1,26 Merkland Street,Glasgow,G11 6DB,17/12/2012,-4.30912,55.870275\n\
14/02/2014,73331,Cafe B Encore At Blair Court,Restaurant/Cafe/Canteen,1,100 Borron Street,Glasgow,G4 9XG,19/11/2012,-4.24913,55.87526\n\
14/02/2014,48928,Cafe Bella Turca,Restaurant/Cafe/Canteen,1,563 Sauchiehall Street,Glasgow,G3 7PQ,09/04/2013,-4.273083,55.866048\n\
14/02/2014,95711,Cafe Bungalow,Restaurant/Cafe/Canteen,1,1363 Dumbarton Road,Glasgow,G14 9UZ,28/03/2013,-4.343177,55.875742\n\
14/02/2014,31168,Cafe Castello Coffee House,Restaurant/Cafe/Canteen,1,61 Old Castle Road,Glasgow,G44 5TG,03/05/2011,-4.257964,55.816491\n\
14/02/2014,23158,Cafe Cherubini,Restaurant/Cafe/Canteen,1,360 Great Western Road,Glasgow,G4 9HT,27/09/2011,-4.276352,55.873833\n\
14/02/2014,91623,Cafe Circa,Restaurant/Cafe/Canteen,1,322 Crow Road,Glasgow,G11 7HS,27/11/2013,-4.321842,55.877747\n\
14/02/2014,127496,Cafe Cosmo,Restaurant/Cafe/Canteen,1,12 Rose Street,Glasgow,G3 6QZ,18/08/2011,-4.260859,55.865545\n\
14/02/2014,17904,Cafe Di Sorrento,Restaurant/Cafe/Canteen,1,470 Crow Road,Glasgow,G11 7DR,19/02/2013,-4.325861,55.88132\n\
14/02/2014,22899,Cafe Euro,Restaurant/Cafe/Canteen,1,549 Duke Street,Glasgow,G31 1DL,21/06/2011,-4.217936,55.858642\n\
14/02/2014,128349,Cafe Express,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,13/03/2013,-4.258023,55.865157\n\
14/02/2014,556086,Cafe Fornette,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,22/07/2013,-4.258023,55.865157\n\
14/02/2014,44283,Cafe Gandolfi,Restaurant/Cafe/Canteen,1,64 Albion Street,Glasgow,G1 1NY,03/10/2013,-4.243579,55.858573\n\
14/02/2014,516677,Cafe Go Go,Restaurant/Cafe/Canteen,1,5 Cresswell Lane,Glasgow,,06/08/2013,,\n\
14/02/2014,108523,Cafe Hula,Restaurant/Cafe/Canteen,1,321 Hope Street,Glasgow,G2 3PT,16/12/2011,-4.256986,55.866281\n\
14/02/2014,19091,Cafe In Victorian Market,Restaurant/Cafe/Canteen,1,233 London Road,Glasgow,G40 1PE,04/02/2012,-4.237417,55.853948\n\
14/02/2014,607008,Cafe India,Restaurant/Cafe/Canteen,1,29 Albion Street,Glasgow,G1 1LH,26/10/2013,-4.244412,55.857775\n\
14/02/2014,95682,Cafe JJ,Restaurant/Cafe/Canteen,1,180 Dumbarton Road,Glasgow,G11 6XE,17/05/2012,-4.29999,55.870769\n\
14/02/2014,73330,Cafe Katia,Restaurant/Cafe/Canteen,1,100 Borron Street,Glasgow,,30/04/2013,-4.24894571,55.87401512\n\
14/02/2014,134208,Cafe La Padella,Restaurant/Cafe/Canteen,1,124 Woodlands Road,Glasgow,G3 6HB,22/04/2013,-4.273911,55.869277\n\
14/02/2014,33024,Cafe Lavita,Restaurant/Cafe/Canteen,1,202 Gallowgate,Glasgow,G1 5DS,29/08/2013,-4.238092,55.855419\n\
14/02/2014,618974,Cafe Lovestruck,Restaurant/Cafe/Canteen,1,751 Pollokshaws Road,Glasgow,G41 2AX,09/12/2013,-4.271722,55.835345\n\
14/02/2014,49187,Cafe Ludovic,Restaurant/Cafe/Canteen,1,11 Lochleven Road,Glasgow,G42 9JU,05/08/2013,-4.265209,55.825507\n\
14/02/2014,571746,Cafe Massimo,Restaurant/Cafe/Canteen,1,1009 Cathcart Road,Glasgow,G42 9XJ,29/07/2013,-4.259091,55.827659\n\
14/02/2014,607039,Cafe Melegrano,Restaurant/Cafe/Canteen,1,105 Albert Drive,Glasgow,G41 2SU,11/11/2013,-4.270098,55.841459\n\
14/02/2014,466607,Cafe Momentum (Scottish Enterprise),Restaurant/Cafe/Canteen,1,50 Waterloo Street,Glasgow,G2 6HQ,14/08/2013,-4.261071,55.86067\n\
14/02/2014,23301,Cafe Noor,Restaurant/Cafe/Canteen,1,49 Kilmarnock Road,Glasgow,G41 3YN,24/01/2013,-4.281972,55.829295\n\
14/02/2014,109495,Cafe Nye,Restaurant/Cafe/Canteen,1,20 India Street,Glasgow,,08/09/2010,,\n\
14/02/2014,534342,Cafe Octavia,Restaurant/Cafe/Canteen,1,40 Edington Street,Glasgow,G4 9RD,31/07/2013,-4.259395,55.872537\n\
14/02/2014,585895,Cafe Olive,Restaurant/Cafe/Canteen,1,513 Amulree Street,Glasgow,G32 7TW,16/09/2013,-4.165765,55.842891\n\
14/02/2014,26685,Cafe Oliver,Restaurant/Cafe/Canteen,1,430 Dumbarton Road,Glasgow,G11 6SB,21/06/2013,-4.310294,55.870936\n\
14/02/2014,48551,Cafe Osa,Restaurant/Cafe/Canteen,1,217 Hope Street,Glasgow,G2 2UW,06/10/2011,-4.257905,55.863667\n\
14/02/2014,10395,Cafe Pearce,Restaurant/Cafe/Canteen,1,860 Govan Road,Glasgow,G51 3UU,13/07/2010,-4.312603,55.863523\n\
14/02/2014,466604,Cafe Phoenix Ltd,Restaurant/Cafe/Canteen,1,262 Woodlands Road,Glasgow,G3 6NE,04/11/2013,-4.277611,55.871869\n\
14/02/2014,48772,Cafe Ritazza,Restaurant/Cafe/Canteen,1,79 Gordon Street,Glasgow,G1 3SQ,19/05/2011,-4.258211,55.859302\n\
14/02/2014,128567,Cafe Ritazza,Restaurant/Cafe/Canteen,1,1 Scottish Exhibition Centre,Glasgow,G3 8YW,01/09/2010,-4.288154,55.86087\n\
14/02/2014,17637,Cafe Roots,Restaurant/Cafe/Canteen,1,63 North Frederick Street,Glasgow,G1 2BS,23/09/2013,-4.248413,55.862025\n\
14/02/2014,585892,Cafe Roots (City Of Glasgow College),Restaurant/Cafe/Canteen,1,230 Cathedral Street,Glasgow,G1 2TG,13/09/2013,-4.246071,55.863255\n\
14/02/2014,48647,Cafe Rouge,Restaurant/Cafe/Canteen,1,20 Royal Exchange Square,Glasgow,G1 3AB,28/11/2013,-4.252561,55.86052\n\
14/02/2014,607016,Cafe Salma,Restaurant/Cafe/Canteen,1,523 Sauchiehall Street,Glasgow,G3 7PQ,06/11/2013,-4.273083,55.866048\n\
14/02/2014,36423,Cafe Select,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,,03/05/2012,,\n\
14/02/2014,551899,Cafe Serena,Restaurant/Cafe/Canteen,1,330 Maxwell Road,Glasgow,G41 1PJ,28/06/2013,-4.273486,55.844506\n\
14/02/2014,31052,Cafe Solo,Restaurant/Cafe/Canteen,1,100 Minard Road,Glasgow,G41 2DL,18/10/2010,-4.282445,55.833825\n\
14/02/2014,406803,Cafe Source Too,Restaurant/Cafe/Canteen,1,32 Hughenden Road,Glasgow,G12 9XP,29/07/2013,-4.305399,55.881939\n\
14/02/2014,618960,Cafe Taste,Restaurant/Cafe/Canteen,1,1515 Dumbarton Road,Glasgow,G14 9XQ,09/12/2013,-4.34962,55.878388\n\
14/02/2014,49149,Cafe Tiki,Restaurant/Cafe/Canteen,1,17 Gullane Street,Glasgow,G11 6AN,16/02/2012,-4.306866,55.870551\n\
14/02/2014,511118,Cafe W,Restaurant/Cafe/Canteen,1,176 Argyle Street,Glasgow,G2 8BT,11/01/2014,-4.256303,55.858645\n\
14/02/2014,480294,Cafe Wander,Restaurant/Cafe/Canteen,1,1032 Argyle Street,Glasgow,G3 8LX,20/11/2013,-4.282007,55.864229\n\
14/02/2014,35571,Cafe Wander,Restaurant/Cafe/Canteen,1,110 West George Street,Glasgow,G2 1PS,15/12/2010,-4.256015,55.862488\n\
14/02/2014,36151,Cafe Zecchino,Restaurant/Cafe/Canteen,1,331 Cumbernauld Road,Glasgow,G31 3LP,19/08/2013,-4.206015,55.862874\n\
14/02/2014,581124,Cafe Zeus,Restaurant/Cafe/Canteen,1,98 Bath Street,Glasgow,G2 2EN,28/08/2013,-4.258163,55.864264\n\
14/02/2014,84951,Cafecart,Restaurant/Cafe/Canteen,1,1036 Cathcart Road,Glasgow,G42 9XW,28/10/2013,-4.258258,55.826524\n\
14/02/2014,26948,Cafezique,Restaurant/Cafe/Canteen,1,66 Hyndland Street,Glasgow,G11 5PT,29/10/2012,-4.301732,55.87293\n\
14/02/2014,48556,Caffe Coupa,Restaurant/Cafe/Canteen,1,115 Clarkston Road,Glasgow,G44 3BL,03/12/2013,-4.263342,55.815906\n\
14/02/2014,26977,Caffe Italiano,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,,03/05/2012,-4.252946,55.863781\n\
14/02/2014,10872,Caffe Nero,Restaurant/Cafe/Canteen,1,93 Hope Street,Glasgow,G2 6LD,27/11/2012,-4.259463,55.860493\n\
14/02/2014,15107,Caffe Nero,Restaurant/Cafe/Canteen,1,1 Dundas Street,Glasgow,G1 2AH,08/07/2008,-4.252667,55.862082\n\
14/02/2014,34801,Caffe Nero,Restaurant/Cafe/Canteen,1,8 Sauchiehall Street,Glasgow,G2 3GF,24/03/2010,-4.25261,55.864681\n\
14/02/2014,31009,Caffe Nero,Restaurant/Cafe/Canteen,1,75 St Enoch Square,Glasgow,G1 4BW,25/02/2011,-4.254458,55.857412\n\
14/02/2014,444484,Caffe Nero,Restaurant/Cafe/Canteen,1,70 Crow Road,Glasgow,G11 7RY,24/06/2013,-4.312117,55.872286\n\
14/02/2014,132427,Caffe Nero,Restaurant/Cafe/Canteen,1,106 Union Street,Glasgow,G1 3QW,08/06/2009,-4.256555,55.859962\n\
14/02/2014,14598,Caffe Nero (3rd Floor Frasers),Restaurant/Cafe/Canteen,1,21 Buchanan Street,Glasgow,,06/01/2011,-4.25468906,55.85893407\n\
14/02/2014,585878,Caffe Ritazza,Restaurant/Cafe/Canteen,1,100 Provan Walk,Glasgow,G34 9DL,16/08/2013,-4.136909,55.872982\n\
14/02/2014,27040,Cail Bruich,Restaurant/Cafe/Canteen,1,725 Great Western Road,Glasgow,G12 8QX,01/08/2013,-4.289157,55.87738\n\
14/02/2014,460439,Cailin\'s Sushi,Restaurant/Cafe/Canteen,1,1136 Argyle Street,Glasgow,G3 8TD,28/06/2013,-4.284857,55.865138\n\
14/02/2014,48710,Cakejoy,Restaurant/Cafe/Canteen,1,15 Lumsden Street,Glasgow,G3 8RQ,18/05/2011,-4.292175,55.866727\n\
14/02/2014,35827,Cakes By Alison,Restaurant/Cafe/Canteen,1,2009 Paisley Road West,Glasgow,G52 3TA,14/06/2010,-4.350899,55.845594\n\
14/02/2014,26229,Caledonia House,Restaurant/Cafe/Canteen,1,140 Fifty Pitches Road,Glasgow,G51 4ED,12/01/2010,-4.322815,55.862549\n\
14/02/2014,571737,Calfe Olive Tree,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,12/12/2013,-4.258023,55.865157\n\
14/02/2014,118487,Calton Fire Station,Restaurant/Cafe/Canteen,1,40 McFarlane Street,Glasgow,G4 0TL,18/03/2011,-4.236351,55.85626\n\
14/02/2014,108469,Cameronian Club,Restaurant/Cafe/Canteen,1,9 Holyrood Crescent,Glasgow,G20 6HJ,16/07/2010,-4.275475,55.874146\n\
14/02/2014,114725,Camphill Bowling Club,Restaurant/Cafe/Canteen,1,5 Langside Avenue,Glasgow,G41 2QR,23/05/2009,-4.277506,55.831022\n\
14/02/2014,188119,Canton Chinese Restaurant/Banana Leaf,Restaurant/Cafe/Canteen,1,65 Cambridge Street,Glasgow,G3 6QX,20/12/2011,-4.260107,55.866359\n\
14/02/2014,100638,Cardonald Bowling Club,Restaurant/Cafe/Canteen,1,50 Forfar Avenue,Glasgow,G52 3JF,16/08/2012,-4.353857,55.843785\n\
14/02/2014,121585,Cardonald College,Restaurant/Cafe/Canteen,1,690 Mosspark Drive,Glasgow,G52 3AY,23/06/2010,-4.337235,55.840444\n\
14/02/2014,49115,Carluccio\'s,Restaurant/Cafe/Canteen,1,7 West Nile Street,Glasgow,G1 2PR,02/11/2012,-4.256056,55.860717\n\
14/02/2014,133071,Carmunnock Village And Recreation Club,Restaurant/Cafe/Canteen,1,109 Waterside Road,Glasgow,G76 9DU,22/01/2009,-4.23462,55.79159\n\
14/02/2014,9,Carmyle Bowling Club,Restaurant/Cafe/Canteen,1,1 River Road,Glasgow,G32 8EG,03/11/2010,-4.155698,55.82868\n\
14/02/2014,571744,Caroline\'s Catering,Restaurant/Cafe/Canteen,1,1500 Edinburgh Road,Glasgow,G33 4UF,29/07/2013,-4.127546,55.857003\n\
14/02/2014,562661,Caseys Cafe,Restaurant/Cafe/Canteen,1,107 Elderpark Street,Glasgow,G51 3NR,18/06/2013,-4.321496,55.859365\n\
14/02/2014,94451,Castlemilk Bowling Club,Restaurant/Cafe/Canteen,1,73 Dougrie Drive,Glasgow,G45 9AH,22/04/2010,-4.236396,55.806136\n\
14/02/2014,126476,Castlemilk Community Fire Station,Restaurant/Cafe/Canteen,1,69 Raithburn Avenue,Glasgow,G45 9RY,11/06/2010,-4.248212,55.805714\n\
14/02/2014,94450,Castlemilk Pensioners Action Centre,Restaurant/Cafe/Canteen,1,59 Dougrie Drive,Glasgow,G45 9AH,23/12/2013,-4.236396,55.806136\n\
14/02/2014,83576,Castlemilk West Church The Haven,Restaurant/Cafe/Canteen,1,119 Carmunnock Road,Glasgow,G44 5UW,16/08/2011,-4.254802,55.818391\n\
14/02/2014,589598,Cat House (Not Reg),Restaurant/Cafe/Canteen,1,15 Union Street,Glasgow,G1 3RB,02/10/2013,-4.257325,55.859184\n\
14/02/2014,49108,Catering Academy,Restaurant/Cafe/Canteen,1,123 Flemington Street,Glasgow,G21 4TD,23/09/2013,-4.229082,55.88055\n\
14/02/2014,32890,Catering Trailers,Restaurant/Cafe/Canteen,1,161 Duke Street,Glasgow,G31 1JD,19/11/2010,-4.230969,55.859377\n\
14/02/2014,56052,Cathcart Bowling Club,Restaurant/Cafe/Canteen,1,74 Ashmore Road,Glasgow,G44 3DD,20/05/2011,-4.268135,55.815441\n\
14/02/2014,128366,CCA (Saramago Cafe),Restaurant/Cafe/Canteen,1,350 Sauchiehall Street,Glasgow,G2 3JD,23/01/2012,-4.26621,55.86604\n\
14/02/2014,112082,Celtic Football Club,Restaurant/Cafe/Canteen,1,95 Kerrydale Street,Glasgow,G40 3RE,16/02/2013,-4.205976,55.849223\n\
14/02/2014,128082,Central Cafe,Restaurant/Cafe/Canteen,1,27 Saltmarket,Glasgow,G1 5NA,05/03/2013,-4.243968,55.856166\n\
14/02/2014,31150,Central Car Auctions Cafe,Restaurant/Cafe/Canteen,1,44 Easterhouse Road,Glasgow,G69 6BH,06/03/2013,-4.108097,55.860771\n\
14/02/2014,507915,Central Market,Restaurant/Cafe/Canteen,1,51 Bell Street,Glasgow,G1 1NX,23/01/2014,-4.244011,55.858034\n\
14/02/2014,594127,CH and Co. Catering Ltd.,Restaurant/Cafe/Canteen,1,18 Cadogan Street,Glasgow,G2 6QN,08/10/2013,-4.261611,55.860067\n\
14/02/2014,107786,Chalmit Lighting,Restaurant/Cafe/Canteen,1,392 Hillington Road,Glasgow,G52 4BL,11/02/2010,-4.363762,55.858011\n\
14/02/2014,460408,Chaophraya,Restaurant/Cafe/Canteen,1,4 Nelson Mandela Place,Glasgow,G2 1BT,21/03/2013,-4.254092,55.862407\n\
14/02/2014,73457,Chapter House,Restaurant/Cafe/Canteen,1,26 Bothwell Street,Glasgow,G2 6NU,22/10/2012,-4.259723,55.861396\n\
14/02/2014,126906,Charcoals,Restaurant/Cafe/Canteen,1,26 Renfield Street,Glasgow,G2 1LU,03/01/2013,-4.256155,55.861875\n\
14/02/2014,594137,Charcoals,Restaurant/Cafe/Canteen,1,74 Trongate,Glasgow,G1 5EP,09/09/2013,-4.245757,55.857275\n\
14/02/2014,97830,Charlie Reid Community Cafe,Restaurant/Cafe/Canteen,1,19 Elmbank Street,Glasgow,G2 4BP,03/09/2013,-4.264135,55.863885\n\
14/02/2014,581087,Charlie Rocks American Diner,Restaurant/Cafe/Canteen,1,337 Byres Road,Glasgow,G12 8UQ,23/07/2013,-4.292599,55.876641\n\
14/02/2014,29642,Cheeky Charlie\'s,Restaurant/Cafe/Canteen,1,12 Gorstan Street,Glasgow,G23 5QG,08/08/2011,-4.289668,55.899902\n\
14/02/2014,123723,Cherry And Heather Fine Food,Restaurant/Cafe/Canteen,1,7 North Gower Street,Glasgow,G51 1PW,06/07/2012,-4.297263,55.851129\n\
14/02/2014,495612,Chill N Grill,Restaurant/Cafe/Canteen,1,966 Argyle Street,Glasgow,G3 8LU,22/01/2014,-4.280265,55.863686\n\
14/02/2014,48833,Chilli Express,Restaurant/Cafe/Canteen,1,1196 Maryhill Road,Glasgow,G20 9BA,05/01/2014,-4.284475,55.886939\n\
14/02/2014,36338,Chilli Grill,Restaurant/Cafe/Canteen,1,515 Sauchiehall Street,Glasgow,G3 7DL,19/12/2013,-4.272258,55.866153\n\
14/02/2014,511144,Chillies West End,Restaurant/Cafe/Canteen,1,180 Woodlands Road,Glasgow,G3 6LL,09/01/2014,-4.275699,55.870331\n\
14/02/2014,49095,China Blue,Restaurant/Cafe/Canteen,1,98 Renfield Street,Glasgow,G2 1NH,28/05/2013,-4.255481,55.864026\n\
14/02/2014,15686,China Buffet King,Restaurant/Cafe/Canteen,1,53 Bath Street,Glasgow,G2 2DJ,11/02/2013,-4.259844,55.861438\n\
14/02/2014,133344,China Buffet King,Restaurant/Cafe/Canteen,1,24 West Nile Street,Glasgow,G1 2PF,04/03/2013,-4.255004,55.861051\n\
14/02/2014,128365,China Buffet King,Restaurant/Cafe/Canteen,1,345 Sauchiehall Street,Glasgow,G2 3HW,15/12/2013,-4.265169,55.865457\n\
14/02/2014,221704,China Chef,Restaurant/Cafe/Canteen,1,529 Carntyne Road,Glasgow,G32 6JL,06/03/2012,-4.1914,55.859891\n\
14/02/2014,128896,China House Restaurant,Restaurant/Cafe/Canteen,1,1286 Shettleston Road,Glasgow,G32 7YR,07/07/2011,-4.164208,55.851367\n\
14/02/2014,594158,China Sea Restaurant,Restaurant/Cafe/Canteen,1,12 Renfield Street,Glasgow,G2 5AL,09/10/2013,-4.256444,55.860791\n\
14/02/2014,22867,China Wok,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,22/02/2013,-4.258023,55.865157\n\
14/02/2014,48778,Chinatown Restaurant,Restaurant/Cafe/Canteen,1,44 New City Road,Glasgow,G4 9JT,17/06/2013,-4.261172,55.869008\n\
14/02/2014,26036,Chinwag\'s Cafe,Restaurant/Cafe/Canteen,1,981 Tollcross Road,Glasgow,G32 8UU,03/05/2013,-4.173803,55.844098\n\
14/02/2014,49059,Chippy Doon The Lane,Restaurant/Cafe/Canteen,1,23 Royal Exchange Square,Glasgow,G1 3AJ,11/03/2011,-4.252971,55.859875\n\
14/02/2014,562696,Chiquito,Restaurant/Cafe/Canteen,1,40 Provan Walk,Glasgow,G34 9DL,18/11/2013,-4.136909,55.872982\n\
14/02/2014,19427,Chiquito,Restaurant/Cafe/Canteen,1,4 Springfield Quay,Glasgow,G5 8NP,10/01/2011,-4.274804,55.855303\n\
14/02/2014,9514,Chocolatte,Restaurant/Cafe/Canteen,1,536 Great Western Road,Glasgow,G12 8EL,15/10/2012,-4.282872,55.875977\n\
14/02/2014,22833,Chop House Brasserie,Restaurant/Cafe/Canteen,1,79 Albion Street,Glasgow,G1 1LH,10/09/2013,-4.244412,55.857775\n\
14/02/2014,28554,Chopstix,Restaurant/Cafe/Canteen,1,184 Argyle Street,Glasgow,G2 8HA,11/03/2013,-4.258211,55.859302\n\
14/02/2014,79740,Chows Restaurant Ltd,Restaurant/Cafe/Canteen,1,98 Byres Road,Glasgow,G12 8TB,10/06/2013,-4.295826,55.873085\n\
14/02/2014,92044,Christine\'s Cafe,Restaurant/Cafe/Canteen,1,271 Cumbernauld Road,Glasgow,G31 2UG,04/11/2013,-4.20924,55.862528\n\
14/02/2014,47022,Chukoku China China,Restaurant/Cafe/Canteen,1,298 Sauchiehall Street,Glasgow,G2 3JA,11/08/2013,-4.263684,55.865763\n\
14/02/2014,77086,Church Of The Nazarene And Hart Memorial,Restaurant/Cafe/Canteen,1,93 Broomhill Drive,Glasgow,G11 7AP,04/06/2010,-4.325312,55.875084\n\
14/02/2014,23341,Citation Taverine And Restaurant,Restaurant/Cafe/Canteen,1,40 Wilson Street,Glasgow,G1 1HD,04/10/2013,-4.248389,55.858853\n\
14/02/2014,102352,City Chambers Council Buffet,Restaurant/Cafe/Canteen,1,80 George Square,Glasgow,G2 1DU,18/07/2013,-4.241922,55.868642\n\
14/02/2014,448781,City Halls/The Old Fruitmarket,Restaurant/Cafe/Canteen,1,96 Candleriggs,Glasgow,G1 1NQ,18/09/2013,-4.245185,55.858993\n\
14/02/2014,48055,City Merchant,Restaurant/Cafe/Canteen,1,97 Candleriggs,Glasgow,G1 1NP,17/09/2013,-4.2458,55.858838\n\
14/02/2014,581131,City Of Glasgow College,Restaurant/Cafe/Canteen,1,300 Cathedral Street,Glasgow,G1 2TA,25/06/2013,-4.247826,55.863213\n\
14/02/2014,26002,City Park Technology,Restaurant/Cafe/Canteen,1,55 Renfrew Street,Glasgow,G2 3BD,25/04/2013,-4.25675,55.865243\n\
14/02/2014,27077,Classy Snax,Restaurant/Cafe/Canteen,1,42 Dalsetter Avenue,Glasgow,G15 8TE,26/07/2012,-4.368116,55.906174\n\
14/02/2014,49150,Clean Plates,Restaurant/Cafe/Canteen,1,10 Gairbraid Avenue,Glasgow,G20 8YA,04/11/2013,-4.290442,55.890504\n\
14/02/2014,117537,Club Bombay,Restaurant/Cafe/Canteen,1,121 Main Street,Glasgow,G69 6AA,17/04/2013,-4.109384,55.850899\n\
14/02/2014,23288,Club Tropicana,Restaurant/Cafe/Canteen,1,26 Cambridge Street,Glasgow,G2 3DZ,09/08/2011,-4.259784,55.865484\n\
14/02/2014,123171,Clyde Union Incorporating Weir Pumps (Staff Restaurant),Restaurant/Cafe/Canteen,1,149 Newlands Road,Glasgow,G44 4EU,06/11/2013,-4.26445,55.818232\n\
14/02/2014,129954,Clydesdale Bank Plc (Aramark),Restaurant/Cafe/Canteen,1,30 St Vincent Place,Glasgow,G1 2EU,22/12/2009,-4.253173,55.861435\n\
14/02/2014,26368,Coffee Culture Cafe,Restaurant/Cafe/Canteen,1,351 Dumbarton Road,Glasgow,G11 6AL,06/11/2009,-4.306264,55.870643\n\
14/02/2014,91626,Coffee House,Restaurant/Cafe/Canteen,1,550 Crow Road,Glasgow,G13 1NU,03/11/2010,-4.325679,55.883894\n\
14/02/2014,511166,Coffee Time,Restaurant/Cafe/Canteen,1,97 St Georges Road,Glasgow,G3 6JA,12/04/2013,-4.271141,55.868097\n\
14/02/2014,35905,\"Coffee, Tea And Chocolate\",Restaurant/Cafe/Canteen,1,944 Argyle Street,Glasgow,G3 8YJ,18/09/2013,-4.278897,55.863253\n\
14/02/2014,10852,Coherent Scotland Ltd.,Restaurant/Cafe/Canteen,1,45 Acre Road,Glasgow,,11/11/2011,-4.3075,55.904165\n\
14/02/2014,95625,Coia\'s,Restaurant/Cafe/Canteen,1,473 Duke Street,Glasgow,G31 1RD,18/03/2013,-4.219946,55.858588\n\
14/02/2014,516685,Comforter In The City,Restaurant/Cafe/Canteen,1,50 Dundas Street,Glasgow,G1 2AQ,28/09/2013,-4.251713,55.862999\n\
14/02/2014,48372,Community Cafe,Restaurant/Cafe/Canteen,1,4 Skirving Street,Glasgow,G41 3AA,11/04/2011,-4.281031,55.829591\n\
14/02/2014,448766,Community Cafe,Restaurant/Cafe/Canteen,1,18 Westerhouse Road,Glasgow,G34 9PD,06/09/2012,-4.126112,55.8673\n\
14/02/2014,18625,Compass Group/Direct Line,Restaurant/Cafe/Canteen,1,55 Robertson Street,Glasgow,G2 8JD,21/09/2010,-4.261742,55.857925\n\
14/02/2014,128880,Congratulations,Restaurant/Cafe/Canteen,1,1027 Shettleston Road,Glasgow,G32 7PB,05/12/2013,-4.169989,55.851912\n\
14/02/2014,31249,Connect 2 Out Of School Care,Restaurant/Cafe/Canteen,1,8 Smithycroft Road,Glasgow,G33 2QJ,05/08/2011,-4.191889,55.867153\n\
14/02/2014,31248,Connect 2 Out Of School Care,Restaurant/Cafe/Canteen,1,38 Liberton Street,Glasgow,G33 2HF,19/08/2011,-4.193883,55.865661\n\
14/02/2014,31247,Connect 2 Out Of School Care,Restaurant/Cafe/Canteen,1,111 Baltic Street,Glasgow,G40 3BA,21/09/2010,-4.218531,55.846939\n\
14/02/2014,581116,Cook And Indi\'s World Buffet,Restaurant/Cafe/Canteen,1,414 Sauchiehall Street,Glasgow,G2 3JD,10/09/2013,-4.26621,55.86604\n\
14/02/2014,33937,Cookie Cafe,Restaurant/Cafe/Canteen,1,75 Lauderdale Gardens,Glasgow,G12 9QU,24/11/2010,-4.308532,55.87788\n\
14/02/2014,31246,Cookie Scotland,Restaurant/Cafe/Canteen,1,72 Nithsdale Road,Glasgow,G41 2AN,17/01/2014,-4.271241,55.836953\n\
14/02/2014,124652,Coral Racing Ltd,Restaurant/Cafe/Canteen,1,372 Paisley Road West,Glasgow,G51 1BG,15/12/2010,-4.295491,55.851971\n\
14/02/2014,126918,Cordia LLP,Restaurant/Cafe/Canteen,1,200 Renfield Street,Glasgow,G2 3PR,04/08/2010,-4.259844,55.861438\n\
14/02/2014,101480,Coronation Restaurant,Restaurant/Cafe/Canteen,1,55 Gallowgate,Glasgow,G1 5AP,30/08/2012,-4.241699,55.85645\n\
14/02/2014,129939,Corrunna Bowling Club,Restaurant/Cafe/Canteen,1,35 St Vincent Crescent,Glasgow,G3 8NG,09/11/2007,-4.286874,55.864372\n\
14/02/2014,371785,Cossachok Russian Cafe Gallery,Restaurant/Cafe/Canteen,1,10 King Street,Glasgow,G1 5QP,03/07/2013,-4.246851,55.85685\n\
14/02/2014,15688,Costa,Restaurant/Cafe/Canteen,1,74 Kilmarnock Road,Glasgow,G41 3NN,08/06/2010,-4.284016,55.828484\n\
14/02/2014,36377,Costa,Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,,02/08/2011,-4.227174,55.858585\n\
14/02/2014,507931,Costa,Restaurant/Cafe/Canteen,1,Leggatston Road,Glasgow,,06/02/2013,,\n\
14/02/2014,433054,Costa,Restaurant/Cafe/Canteen,1,67 St Vincent Street,Glasgow,G1 2PS,07/11/2013,-4.255774,55.8611\n\
14/02/2014,585876,Costa,Restaurant/Cafe/Canteen,1,715 Provan Walk,Glasgow,G34 9DY,16/08/2013,-4.138074,55.871218\n\
14/02/2014,128356,Costa Coffee,Restaurant/Cafe/Canteen,1,207 Sauchiehall Street,Glasgow,G2 3EX,20/01/2011,-4.26132,55.864961\n\
14/02/2014,18744,Costa Coffee,Restaurant/Cafe/Canteen,1,50 Bothwell Street,Glasgow,G2 6HR,01/08/2012,-4.260909,55.861464\n\
14/02/2014,127763,Costa Coffee,Restaurant/Cafe/Canteen,1,10 Royal Exchange Square,Glasgow,G1 3AB,24/05/2012,-4.252561,55.86052\n\
14/02/2014,102347,Costa Coffee,Restaurant/Cafe/Canteen,1,38 George Square,Glasgow,G1 2AF,08/02/2011,-4.251204,55.862487\n\
14/02/2014,23106,Costa Coffee,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,08/07/2010,-4.342073,55.822898\n\
14/02/2014,78068,Costa Coffee,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,G1 2GF,09/09/2010,-4.25248,55.862985\n\
14/02/2014,104183,Costa Coffee,Restaurant/Cafe/Canteen,1,79 Gordon Street,Glasgow,G1 3SQ,10/02/2010,-4.258211,55.859302\n\
14/02/2014,128352,Costa In Waterstones,Restaurant/Cafe/Canteen,1,153 Sauchiehall Street,Glasgow,G2 3EW,01/02/2011,-4.258115,55.864535\n\
14/02/2014,14732,Costco Cafe,Restaurant/Cafe/Canteen,1,15 Cobden Road,Glasgow,G21 1YX,21/11/2012,-4.228446,55.875304\n\
14/02/2014,129369,Courtyard Cafe (Resource Centre),Restaurant/Cafe/Canteen,1,192 Southbrae Drive,Glasgow,G13 1TX,29/10/2008,-4.346984,55.884514\n\
14/02/2014,65395,Cowglen Golf Club,Restaurant/Cafe/Canteen,1,301 Barrhead Road,Glasgow,G43 1AU,19/03/2010,-4.319451,55.822096\n\
14/02/2014,31288,Crabshakk,Restaurant/Cafe/Canteen,1,1114 Argyle Street,Glasgow,G3 8TD,08/01/2013,-4.284857,55.865138\n\
14/02/2014,31347,Cranachan,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,25/06/2012,-4.253456,55.859156\n\
14/02/2014,581104,Cranberrys (Glasgow) Ltd,Restaurant/Cafe/Canteen,1,30 Wilson Street,Glasgow,G1 1SS,14/08/2013,-4.24667,55.858687\n\
14/02/2014,34020,Crazy Wok,Restaurant/Cafe/Canteen,1,173 Dumbarton Road,Glasgow,G11 6AA,28/10/2013,-4.301502,55.870669\n\
14/02/2014,101478,Criterion Cafe,Restaurant/Cafe/Canteen,1,46 Gallowgate,Glasgow,G1 5AB,27/02/2013,-4.242888,55.856284\n\
14/02/2014,594162,Crolla\'s Gelateria,Restaurant/Cafe/Canteen,1,221 Byres Road,Glasgow,G12 8UD,08/01/2014,-4.294404,55.87499\n\
14/02/2014,91381,Crookston Bowling Club,Restaurant/Cafe/Canteen,1,760 Crookston Road,Glasgow,G53 7TT,28/04/2009,-4.364017,55.829057\n\
14/02/2014,120132,Cross Enterprise,Restaurant/Cafe/Canteen,1,11 Minerva Way,Glasgow,G3 8AU,28/05/2012,-4.283855,55.863044\n\
14/02/2014,444495,Crown Carvery,Restaurant/Cafe/Canteen,1,7 Allerdyce Court,Glasgow,,30/08/2012,-4.376204,55.902954\n\
14/02/2014,95684,Cullis Diner,Restaurant/Cafe/Canteen,1,202 Dumbarton Road,Glasgow,G11 6UN,01/12/2013,-4.301203,55.871016\n\
14/02/2014,35565,Cup,Restaurant/Cafe/Canteen,1,311 Byres Road,Glasgow,G12 8UQ,16/06/2010,-4.292599,55.876641\n\
14/02/2014,406809,Cup Tea Lounge,Restaurant/Cafe/Canteen,1,71 Renfield Street,Glasgow,G2 1LP,20/09/2013,-4.256413,55.86329\n\
14/02/2014,48154,Cupcake Workshop,Restaurant/Cafe/Canteen,1,39 Marywood Square,Glasgow,G41 2BN,24/03/2011,-4.275974,55.835688\n\
14/02/2014,15176,Curry Karaoke Club,Restaurant/Cafe/Canteen,1,100 Stobcross Road,Glasgow,G3 8QQ,27/04/2013,-4.296235,55.861861\n\
14/02/2014,49156,Cushion and Cake,Restaurant/Cafe/Canteen,1,35 Old Dumbarton Road,Glasgow,G3 8RD,19/11/2013,-4.291944,55.866884\n\
14/02/2014,406782,Da Vinci\'s,Restaurant/Cafe/Canteen,1,50 Queen Street,Glasgow,G1 3DS,26/10/2012,-4.251673,55.859261\n\
14/02/2014,111955,Daisy Cafe,Restaurant/Cafe/Canteen,1,431 Keppochhill Road,Glasgow,G21 1HT,12/06/2013,-4.246321,55.876452\n\
14/02/2014,19482,Dakhin,Restaurant/Cafe/Canteen,1,89 Candleriggs,Glasgow,G1 1NP,16/05/2012,-4.2458,55.858838\n\
14/02/2014,78064,D\'Arcy\'s,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,16/08/2011,-4.253456,55.859156\n\
14/02/2014,103069,Darnley Bowling Club,Restaurant/Cafe/Canteen,1,120 Glen Moriston Road,Glasgow,G53 7HT,02/02/2009,-4.339755,55.807951\n\
14/02/2014,95639,Daughters Cafe,Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,05/12/2011,-4.199841,55.853449\n\
14/02/2014,23188,David Lloyd Glasgow West End,Restaurant/Cafe/Canteen,1,238 Netherton Road,Glasgow,G13 1BJ,18/02/2010,-4.325916,55.897209\n\
14/02/2014,53569,Debenhams Retail Plc (The Restaurant) 5th Floor,Restaurant/Cafe/Canteen,1,65 Argyle Street,Glasgow,G2 8AH,10/09/2013,-4.250499,55.857476\n\
14/02/2014,35136,Deborah Stein,Restaurant/Cafe/Canteen,1,5 Coopers Well Street,Glasgow,G11 6QE,13/04/2010,-4.300277,55.869955\n\
14/02/2014,31120,Deco,Restaurant/Cafe/Canteen,1,8 Elliot Place,Glasgow,,16/08/2013,-4.27924274,55.86093689\n\
14/02/2014,15644,Deco Coffee Shop,Restaurant/Cafe/Canteen,1,1053 Great Western Road,Glasgow,G12 0YN,19/02/2010,-4.312872,55.88365\n\
14/02/2014,123474,Deejay\'s Snooker Club,Restaurant/Cafe/Canteen,1,21 Nithsdale Street,Glasgow,G41 2PZ,14/06/2010,-4.270959,55.837048\n\
14/02/2014,568573,Deli Bakery,Restaurant/Cafe/Canteen,1,Congress Road,Glasgow,G3 8YW,09/07/2013,-4.288154,55.86087\n\
14/02/2014,315962,Deli Bean Machine,Restaurant/Cafe/Canteen,1,348 Byres Road,Glasgow,G12 8AP,04/04/2012,-4.291748,55.876576\n\
14/02/2014,315960,Deli Bean Machine,Restaurant/Cafe/Canteen,1,180 Crown Street,Glasgow,G5 9XD,04/04/2012,-4.25077,55.849184\n\
14/02/2014,534358,Deli Venezia Ltd,Restaurant/Cafe/Canteen,1,31 Gibson Street,Glasgow,G12 8NU,19/08/2013,-4.282448,55.8723\n\
14/02/2014,618970,Delices,Restaurant/Cafe/Canteen,1,150 Battlefield Road,Glasgow,G42 9JT,09/12/2013,-4.265146,55.826083\n\
14/02/2014,49159,Delightfully Delicious,Restaurant/Cafe/Canteen,1,80 Monreith Road,Glasgow,G43 2PE,09/11/2011,-4.27554,55.818413\n\
14/02/2014,30990,Dell Cafe,Restaurant/Cafe/Canteen,1,368 Alexandra Parade,Glasgow,G31 3AU,12/09/2013,-4.223281,55.864091\n\
14/02/2014,126981,Dental Hospital/Full O Beans Cafe,Restaurant/Cafe/Canteen,1,378 Sauchiehall Street,Glasgow,G2 3JD,24/02/2012,-4.26621,55.86604\n\
14/02/2014,116806,Dewar\'s Cafe,Restaurant/Cafe/Canteen,1,1700 London Road,Glasgow,G32 8XR,02/09/2013,-4.189046,55.841913\n\
14/02/2014,127764,Di Maggio\'s,Restaurant/Cafe/Canteen,1,21 Royal Exchange Square,Glasgow,G1 3AJ,24/10/2013,-4.252971,55.859875\n\
14/02/2014,511175,Di Maggios Pizzeria,Restaurant/Cafe/Canteen,1,1040 Pollokshaws Road,Glasgow,G41 3EB,19/02/2013,-4.279512,55.831471\n\
14/02/2014,127894,Di Maggio\'s Pizzeria,Restaurant/Cafe/Canteen,1,61 Ruthven Lane,Glasgow,G12 9BG,27/10/2013,-4.295154,55.875506\n\
14/02/2014,360875,Di Maggio\'s Pronto,Restaurant/Cafe/Canteen,1,163 West Nile Street,Glasgow,G1 2RL,14/05/2012,-4.254227,55.86528\n\
14/02/2014,73463,Dial House  (Not Reg),Restaurant/Cafe/Canteen,1,215 Bothwell Street,Glasgow,G2 7EZ,09/08/2011,-4.266307,55.861679\n\
14/02/2014,120359,Diamond Dolls Cabaret Club,Restaurant/Cafe/Canteen,1,39 Mitchell Street,Glasgow,G1 3LN,07/10/2010,-4.256295,55.859338\n\
14/02/2014,133365,Digs Coffee House,Restaurant/Cafe/Canteen,1,130 West Regent Street,Glasgow,G2 2RQ,20/10/2009,-4.259858,55.86373\n\
14/02/2014,48692,Dilhani\'s Home Kitchen,Restaurant/Cafe/Canteen,1,30 Kingsway Court,Glasgow,G14 9TJ,27/01/2014,-4.35871,55.883804\n\
14/02/2014,193939,Din Dins,Restaurant/Cafe/Canteen,1,150 Balmore Road,Glasgow,G22 6LJ,24/01/2012,-4.257303,55.887441\n\
14/02/2014,32907,Dining In At Mother India,Restaurant/Cafe/Canteen,1,1345 Argyle Street,Glasgow,,19/02/2013,-4.29043502,55.86698055\n\
14/02/2014,128340,Dino\'s,Restaurant/Cafe/Canteen,1,35 Sauchiehall Street,Glasgow,G2 3AT,15/11/2013,-4.25482,55.864209\n\
14/02/2014,30874,D\'Nisi,Restaurant/Cafe/Canteen,1,265 Kilmarnock Road,Glasgow,G41 3JF,06/08/2013,-4.285134,55.826315\n\
14/02/2014,72756,Dobbies Garden Centre,Restaurant/Cafe/Canteen,1,846 Boclair Road,Glasgow,G62 6EP,01/07/2010,-4.286158,55.926417\n\
14/02/2014,31339,Dominos Pizza,Restaurant/Cafe/Canteen,1,11 Main Street,Glasgow,G69 6SG,30/06/2011,-4.113654,55.850395\n\
14/02/2014,568567,Dougie\'s Kitchen,Restaurant/Cafe/Canteen,1,514 Tollcross Road,Glasgow,G31 4XX,13/01/2014,-4.186874,55.847317\n\
14/02/2014,18390,Dowanvale Cafe,Restaurant/Cafe/Canteen,1,35 Dowanhill Street,Glasgow,G11 5QR,01/03/2010,-4.300744,55.871636\n\
14/02/2014,108522,Dragon I,Restaurant/Cafe/Canteen,1,311 Hope Street,Glasgow,G2 3PT,13/12/2011,-4.256986,55.866281\n\
14/02/2014,94723,Drake Cafe,Restaurant/Cafe/Canteen,1,6 Drakemire Drive,Glasgow,G44 5EL,11/10/2011,-4.245516,55.810167\n\
14/02/2014,36304,Dream Cakes,Restaurant/Cafe/Canteen,1,16 Kingsbarns Drive,Glasgow,G44 4SN,21/02/2011,-4.253857,55.822758\n\
14/02/2014,607009,Drizzle Cafe/Deli,Restaurant/Cafe/Canteen,1,49 Sinclair Drive,Glasgow,G42 9PR,06/11/2013,-4.266867,55.826564\n\
14/02/2014,594118,Drumchapel St Mark\'s Church,Restaurant/Cafe/Canteen,1,283 Kinfauns Drive,Glasgow,G15 7BD,09/10/2013,-4.37085,55.917149\n\
14/02/2014,95246,Drumoyne Square Bowling Club,Restaurant/Cafe/Canteen,1,9 Drumoyne Square,Glasgow,G51 4BG,09/08/2010,-4.330553,55.856362\n\
14/02/2014,10349,Dunard Estates Limited,Restaurant/Cafe/Canteen,1,31 Stockwell Street,Glasgow,G1 4RZ,07/09/2012,-4.249198,55.856816\n\
14/02/2014,35717,East End Diner,Restaurant/Cafe/Canteen,1,12 Millerston Street,Glasgow,G31 1QE,13/01/2014,-4.214037,55.858083\n\
14/02/2014,31024,Easterhouse Health Centre (Staff Canteen),Restaurant/Cafe/Canteen,1,9 Auchinlea Road,Glasgow,G34 9HQ,24/04/2009,-4.125976,55.868912\n\
14/02/2014,36428,Eastern Treats,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,,18/06/2012,,\n\
14/02/2014,624650,Eastgate Bean Machine,Restaurant/Cafe/Canteen,1,727 London Road,Glasgow,G40 3AQ,18/11/2013,-4.220985,55.849357\n\
14/02/2014,26591,Easy Way Tea Shop,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,14/05/2010,-4.258023,55.865157\n\
14/02/2014,495613,Eat,Restaurant/Cafe/Canteen,1,31 Gordon Street,Glasgow,,05/09/2013,,\n\
14/02/2014,49116,Eat Cafe,Restaurant/Cafe/Canteen,1,69 Kilmarnock Road,Glasgow,G41 3YR,10/04/2012,-4.282917,55.828531\n\
14/02/2014,48822,Eats And Treats,Restaurant/Cafe/Canteen,1,10 Boyd Street,Glasgow,G42 8AW,09/01/2014,-4.255423,55.83409\n\
14/02/2014,545756,Eats By Heavenly Treats,Restaurant/Cafe/Canteen,1,1171 Pollokshaws Road,Glasgow,G41 3NG,24/04/2013,-4.282646,55.829903\n\
14/02/2014,548284,Ecco 808 II Caffe,Restaurant/Cafe/Canteen,1,808 Crow Road,Glasgow,G13 1LY,02/07/2013,-4.324758,55.889609\n\
14/02/2014,96465,Edrington Group Plc,Restaurant/Cafe/Canteen,1,2500 Great Western Road,Glasgow,G15 6RW,28/06/2012,-4.371165,55.907364\n\
14/02/2014,35938,Elia,Restaurant/Cafe/Canteen,1,24 George Square,Glasgow,G2 1EG,17/09/2013,-4.251756,55.861524\n\
14/02/2014,360790,Elior UK,Restaurant/Cafe/Canteen,1,33 Beardmore Way,Glasgow,G31 4BG,01/05/2012,-4.209588,55.856276\n\
14/02/2014,618968,Emilia Cafe,Restaurant/Cafe/Canteen,1,86 Elderslie Street,Glasgow,G3 7AL,09/12/2013,-4.275325,55.86393\n\
14/02/2014,26513,Enjoy Cafe,Restaurant/Cafe/Canteen,1,393 Great Western Road,Glasgow,G4 9HY,03/06/2011,-4.277598,55.873819\n\
14/02/2014,48345,Epicures,Restaurant/Cafe/Canteen,1,159 Hyndland Road,Glasgow,G12 9JA,22/04/2013,-4.305944,55.876832\n\
14/02/2014,86012,Esca - E2,Restaurant/Cafe/Canteen,1,27 Chisholm Street,Glasgow,G1 5HA,28/08/2013,-4.245203,55.85653\n\
14/02/2014,27029,Esquires Coffee House,Restaurant/Cafe/Canteen,1,115 Hope Street,Glasgow,G2 6LL,24/04/2012,-4.259448,55.86079\n\
14/02/2014,79978,Esure,Restaurant/Cafe/Canteen,1,19 Cadogan Street,Glasgow,G2 6QQ,14/09/2010,-4.261887,55.859594\n\
14/02/2014,448773,Euphorium,Restaurant/Cafe/Canteen,1,23 Byres Road,Glasgow,G11 5RD,07/08/2013,-4.299312,55.870926\n\
14/02/2014,33495,Eurest,Restaurant/Cafe/Canteen,1,110 St Vincent Street,Glasgow,G2 5ER,08/04/2010,-4.257098,55.861875\n\
14/02/2014,31198,Eurest (British Telecom),Restaurant/Cafe/Canteen,1,15 York Street,Glasgow,G2 8LA,23/08/2013,-4.263456,55.857436\n\
14/02/2014,107296,Eurest (DSS Staff Canteen),Restaurant/Cafe/Canteen,1,21 Herschell Street,Glasgow,G13 1HT,19/03/2009,-4.322031,55.890281\n\
14/02/2014,120082,Eurest (DWP Northgate House),Restaurant/Cafe/Canteen,1,96 Milton Street,Glasgow,,28/06/2013,-4.25340804,55.86816853\n\
14/02/2014,15488,Eurest (Tesco Shettleton),Restaurant/Cafe/Canteen,1,601 Old Shettleston Road,Glasgow,G32 7JG,21/02/2011,-4.164056,55.852951\n\
14/02/2014,480291,Eurest (Tesco),Restaurant/Cafe/Canteen,1,751 Barrhead Road,Glasgow,G53 6AG,09/01/2008,-4.342073,55.822898\n\
14/02/2014,87622,Eurest (Victoria Biscuits),Restaurant/Cafe/Canteen,1,35 Clydeford Drive,Glasgow,G32 8YW,17/02/2011,-4.18749,55.84434\n\
14/02/2014,25448,Eurest Restaurant And Staff Canteen,Restaurant/Cafe/Canteen,1,500 Helen Street,Glasgow,G51 3HR,30/06/2011,-4.32041,55.852671\n\
14/02/2014,129430,Eurest Services,Restaurant/Cafe/Canteen,1,42 Spean Street,Glasgow,G44 4DB,28/06/2010,-4.262681,55.819379\n\
14/02/2014,221698,Evans Halshaw,Restaurant/Cafe/Canteen,1,694 Cumbernauld Road,Glasgow,G33 2ES,29/02/2012,-4.198938,55.862632\n\
14/02/2014,131929,Excelsior Catering (Parkhead Bus Depot),Restaurant/Cafe/Canteen,1,252 Tollcross Road,Glasgow,G31 4UZ,17/10/2013,-4.193397,55.849681\n\
14/02/2014,371810,Fairfield Bowling Club,Restaurant/Cafe/Canteen,1,85 Shieldhall Road,Glasgow,G51 4XA,21/05/2012,-4.328841,55.854723\n\
14/02/2014,91521,Fairfield Working Mens Club,Restaurant/Cafe/Canteen,1,211 Crossloan Road,Glasgow,G51 3QD,27/10/2009,-4.323831,55.860192\n\
14/02/2014,188099,Fanellis,Restaurant/Cafe/Canteen,1,71 Albion Street,Glasgow,G1 1NY,09/01/2014,-4.243579,55.858573\n\
14/02/2014,53586,Fanny Trollops,Restaurant/Cafe/Canteen,1,1066 Argyle Street,Glasgow,G3 8LY,11/07/2013,-4.283491,55.864741\n\
14/02/2014,128884,Favourite Cafe,Restaurant/Cafe/Canteen,1,1078 Shettleston Road,Glasgow,G32 7PW,17/09/2013,-4.169985,55.851544\n\
14/02/2014,188120,Fazzi,Restaurant/Cafe/Canteen,1,65 Cambridge Street,Glasgow,G3 6QX,20/12/2011,-4.260107,55.866359\n\
14/02/2014,511154,Felix And Oscar,Restaurant/Cafe/Canteen,1,459 Great Western Road,Glasgow,G12 8HH,17/07/2013,-4.280988,55.874934\n\
14/02/2014,17960,Fifi And Ally,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,10/07/2012,-4.253456,55.859156\n\
14/02/2014,360828,Finnieston,Restaurant/Cafe/Canteen,1,1125 Argyle Street,Glasgow,G3 8ND,12/11/2013,-4.283834,55.86433\n\
14/02/2014,10813,Fire Station (Central Command Headquarters),Restaurant/Cafe/Canteen,1,91 Port Dundas Road,Glasgow,G4 0ES,19/11/2012,-4.255474,55.868592\n\
14/02/2014,132663,First Bus/Excelsior Catering,Restaurant/Cafe/Canteen,1,197 Victoria Road,Glasgow,G42 7AD,14/06/2012,-4.261965,55.84169\n\
14/02/2014,89442,Fit Food Bistro,Restaurant/Cafe/Canteen,1,50 Couper Street,Glasgow,G4 0EA,28/08/2013,-4.241922,55.868642\n\
14/02/2014,49191,Flavour Glasgow,Restaurant/Cafe/Canteen,1,11 Kennedy Path,Glasgow,G4 0PP,09/12/2013,-4.243187,55.866462\n\
14/02/2014,56020,Flourish House,Restaurant/Cafe/Canteen,1,25 Ashley Street,Glasgow,G3 6DR,13/11/2009,-4.272957,55.869357\n\
14/02/2014,534343,Food Fillas,Restaurant/Cafe/Canteen,1,243 Ingram Street,Glasgow,G1 1DA,10/12/2013,-4.250967,55.859768\n\
14/02/2014,34349,Food To Go/Food For Thought,Restaurant/Cafe/Canteen,1,65 Hillhead Street,Glasgow,G12 8QF,23/08/2011,-4.288254,55.873172\n\
14/02/2014,31156,Forbidden,Restaurant/Cafe/Canteen,1,96 Maxwell Street,Glasgow,G1 4AU,26/11/2011,-4.255036,55.85635\n\
14/02/2014,100639,Forfar Avenue Care Home,Restaurant/Cafe/Canteen,1,60 Forfar Avenue,Glasgow,G52 3JF,09/04/2013,-4.353857,55.843785\n\
14/02/2014,48966,Forge Market Cafe,Restaurant/Cafe/Canteen,1,1201 Duke Street,Glasgow,,10/11/2013,,\n\
14/02/2014,507925,Forget Me Not Cafe,Restaurant/Cafe/Canteen,1,Millbrix Avenue,Glasgow,,02/07/2013,,\n\
14/02/2014,83599,Foxley Bowling Club,Restaurant/Cafe/Canteen,1,30 Carmyle Avenue,Glasgow,G32 8HU,17/02/2010,-4.161018,55.836801\n\
14/02/2014,48916,Framptons,Restaurant/Cafe/Canteen,1,1236 Maryhill Road,Glasgow,,14/01/2013,-4.28554381,55.88738381\n\
14/02/2014,15001,Frankie And Benny\'s,Restaurant/Cafe/Canteen,1,705 Provan Walk,Glasgow,G34 9DY,20/10/2013,-4.138074,55.871218\n\
14/02/2014,129597,Frankie And Benny\'s,Restaurant/Cafe/Canteen,1,5 Springfield Quay,Glasgow,G5 8NP,24/04/2012,-4.274804,55.855303\n\
14/02/2014,23271,Frankie and Benny\'s,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,30/10/2012,-4.342073,55.822898\n\
14/02/2014,126908,Fratelli Sarti,Restaurant/Cafe/Canteen,1,42 Renfield Street,Glasgow,G2 1NF,08/10/2013,-4.255482,55.862669\n\
14/02/2014,581134,Friends Chinese Cafe,Restaurant/Cafe/Canteen,1,273 High Street,Glasgow,G4 0QS,05/09/2013,-4.23876,55.860907\n\
14/02/2014,607034,Frosoulla\'s,Restaurant/Cafe/Canteen,1,39 Sinclair Drive,Glasgow,G42 9PR,26/11/2013,-4.266867,55.826564\n\
14/02/2014,427403,Fullarton Halls-Tollcross Masonic Lodge,Restaurant/Cafe/Canteen,1,25 Causewayside Street,Glasgow,G32 8LT,12/07/2012,-4.16974,55.84257\n\
14/02/2014,25116,G and A McHarg Bakers,Restaurant/Cafe/Canteen,1,1493 Paisley Road West,Glasgow,G52 1SH,20/01/2012,-4.332153,55.846275\n\
14/02/2014,25319,\"G5 Fruit, Wholefoods and Deli\",Restaurant/Cafe/Canteen,1,158 Crown Street,Glasgow,G5 9XD,03/08/2012,-4.25077,55.849184\n\
14/02/2014,90072,Gala / Coral Bingo Hall,Restaurant/Cafe/Canteen,1,30 Craigmont Drive,Glasgow,G20 9BS,15/06/2010,-4.285299,55.888713\n\
14/02/2014,106810,Gala Bingo,Restaurant/Cafe/Canteen,1,167 Hawthorn Street,Glasgow,G22 6DB,27/04/2012,-4.250754,55.88757\n\
14/02/2014,360756,Gala Bingo,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,,30/04/2012,,\n\
14/02/2014,571739,Gala Princes Casino,Restaurant/Cafe/Canteen,1,528 Sauchiehall Street,Glasgow,G2 3LW,24/07/2013,-4.268862,55.866296\n\
14/02/2014,571741,Gala Riverboat Casino,Restaurant/Cafe/Canteen,1,61 Broomielaw,Glasgow,G1 4RJ,24/07/2013,-4.26063,55.856373\n\
14/02/2014,126272,Gallery Of Modern Art Cafe,Restaurant/Cafe/Canteen,1,111 Queen Street,Glasgow,G1 3AH,25/08/2011,-4.252504,55.859812\n\
14/02/2014,133324,Gamba,Restaurant/Cafe/Canteen,1,225 West George Street,Glasgow,G2 4TY,01/03/2012,-4.260929,55.862632\n\
14/02/2014,104688,Gambrino Pizzeria,Restaurant/Cafe/Canteen,1,327 Great Western Road,Glasgow,G4 9HS,18/06/2013,-4.276506,55.873471\n\
14/02/2014,49102,Gandolfi Fish,Restaurant/Cafe/Canteen,1,86 Albion Street,Glasgow,G1 1NY,23/04/2013,-4.243579,55.858573\n\
14/02/2014,94405,Garrowhill Bowling Club,Restaurant/Cafe/Canteen,1,30 Douglas Drive,Glasgow,G69 6NJ,08/06/2010,-4.126677,55.85221\n\
14/02/2014,114660,Gaynor\'s Cafe,Restaurant/Cafe/Canteen,1,80 Langlands Road,Glasgow,G51 3BQ,10/10/2012,-4.315544,55.86273\n\
14/02/2014,511130,Geek Retreat,Restaurant/Cafe/Canteen,1,63 Union Street,Glasgow,G1 3RB,29/06/2013,-4.257325,55.859184\n\
14/02/2014,48946,Gennaro\'s Fish and Chips Cafe,Restaurant/Cafe/Canteen,1,1556 Great Western Road,Glasgow,G13 1HJ,17/08/2011,-4.322328,55.889358\n\
14/02/2014,128380,Genting Casino (Glasgow),Restaurant/Cafe/Canteen,1,516 Sauchiehall Street,Glasgow,G2 3LW,17/09/2013,-4.268862,55.866296\n\
14/02/2014,75027,Georgie Porgies,Restaurant/Cafe/Canteen,1,195 Brand Street,Glasgow,G51 1AB,14/06/2013,-4.298197,55.853421\n\
14/02/2014,427408,Glasgow Art Club,Restaurant/Cafe/Canteen,1,185 Bath Street,Glasgow,G2 4HU,26/06/2012,-4.262598,55.86439\n\
14/02/2014,124665,Glasgow Climbing Cente Balcony Cafe,Restaurant/Cafe/Canteen,1,534 Paisley Road West,Glasgow,G51 1RN,04/12/2012,-4.304993,55.850813\n\
14/02/2014,133386,Glasgow Drugs Crisis Centre,Restaurant/Cafe/Canteen,1,121 West Street,Glasgow,G5 8BA,31/10/2013,-4.264616,55.852938\n\
14/02/2014,91628,Glasgow High School Club Ltd,Restaurant/Cafe/Canteen,1,689 Crow Road,Glasgow,G13 1PB,18/05/2012,-4.325946,55.888086\n\
14/02/2014,200626,Glasgow Masonic Club,Restaurant/Cafe/Canteen,1,212 Stevenson Street,Glasgow,G40 2RW,20/01/2012,-4.231362,55.853124\n\
14/02/2014,19310,Glasgow Science Centre,Restaurant/Cafe/Canteen,1,50 Pacific Quay,Glasgow,G51 1EA,11/12/2013,-4.293805,55.85832\n\
14/02/2014,95767,Glasgow Ski Centre,Restaurant/Cafe/Canteen,1,16 Dumbreck Road,Glasgow,G41 5BW,29/01/2013,-4.313765,55.847332\n\
14/02/2014,10196,Glasgow University St Andrews College,Restaurant/Cafe/Canteen,1,Eldon Street,Glasgow,G3 6NH,21/04/2010,-4.27976,55.871703\n\
14/02/2014,36372,Glasgow Westend Vineyard Church,Restaurant/Cafe/Canteen,1,4 Linden Street,Glasgow,G13 1DQ,15/11/2010,-4.324691,55.893574\n\
14/02/2014,466597,Glasvagas,Restaurant/Cafe/Canteen,1,111 Nelson Street,Glasgow,G5 8DZ,05/11/2012,-4.262314,55.852918\n\
14/02/2014,132668,Go Slow Cafe,Restaurant/Cafe/Canteen,1,452 Victoria Road,Glasgow,G42 8YU,27/03/2012,-4.265402,55.835973\n\
14/02/2014,33082,Golden Phoenix,Restaurant/Cafe/Canteen,1,631 Pollokshaws Road,Glasgow,G41 2QG,03/08/2011,-4.268612,55.837343\n\
14/02/2014,612668,Good Luck Kid,Restaurant/Cafe/Canteen,1,120 Carstairs Street,Glasgow,G40 4JD,21/11/2013,-4.221939,55.839202\n\
14/02/2014,96464,Goodyear Sports,Restaurant/Cafe/Canteen,1,307 Duntreath Avenue,Glasgow,G15 6RU,05/12/2011,-4.370984,55.905193\n\
14/02/2014,581143,Gorbals Health Centre,Restaurant/Cafe/Canteen,1,45 Pine Place,Glasgow,G5 0BQ,10/09/2013,-4.248495,55.848237\n\
14/02/2014,62060,Gorbals Leisure Centre,Restaurant/Cafe/Canteen,1,275 Ballater Street,Glasgow,G5 0YP,06/03/2009,-4.246472,55.850287\n\
14/02/2014,132604,Govan Bowling Club,Restaurant/Cafe/Canteen,1,75 Vicarfield Street,Glasgow,G51 2DL,13/06/2012,-4.322815,55.862549\n\
14/02/2014,104330,Govan Community  Fire Station,Restaurant/Cafe/Canteen,1,677 Govan Road,Glasgow,G51 2BH,09/06/2011,-4.307792,55.861375\n\
14/02/2014,80664,Govanhill Health Centre (Lynda\'s Larder),Restaurant/Cafe/Canteen,1,233 Calder Street,Glasgow,G42 7DR,01/02/2011,-4.257842,55.837245\n\
14/02/2014,36136,Grace And Flavour,Restaurant/Cafe/Canteen,1,24 Daisy Street,Glasgow,G42 8JL,09/11/2011,-4.258728,55.836006\n\
14/02/2014,104326,Grand Ole Opry,Restaurant/Cafe/Canteen,1,4 Govan Road,Glasgow,G51 1HS,01/12/2011,-4.279178,55.854143\n\
14/02/2014,511117,Granny Bells (Rachels),Restaurant/Cafe/Canteen,1,1320 Shettleston Road,Glasgow,G32 7YS,24/06/2013,-4.163439,55.851344\n\
14/02/2014,31196,Great Clydesdale Food Co @ Film City,Restaurant/Cafe/Canteen,1,401 Govan Road,Glasgow,G51 2QJ,01/09/2009,-4.300017,55.856631\n\
14/02/2014,432985,Green Chilli Cafe,Restaurant/Cafe/Canteen,1,1293 Argyle Street,Glasgow,G3 8TL,28/08/2013,-4.290304,55.866438\n\
14/02/2014,10652,Green City Canteen,Restaurant/Cafe/Canteen,1,23 Fleming Street,Glasgow,G31 1PQ,06/06/2013,-4.207895,55.85769\n\
14/02/2014,56100,Grosvenor Cinema (Grosvenor Cafe),Restaurant/Cafe/Canteen,1,36 Ashton Lane,Glasgow,G12 8SJ,15/05/2013,-4.292992,55.87463\n\
14/02/2014,618986,GSA Student Association,Restaurant/Cafe/Canteen,1,20 Scott Street,Glasgow,,11/12/2013,,\n\
14/02/2014,89462,Guido\'s Fast Foods,Restaurant/Cafe/Canteen,1,74 Coustonholm Road,Glasgow,G43 1TZ,26/06/2012,-4.286365,55.825519\n\
14/02/2014,30959,Gusto and Relish,Restaurant/Cafe/Canteen,1,729 Pollokshaws Road,Glasgow,G41 2AA,12/04/2010,-4.270716,55.835902\n\
14/02/2014,511173,Haggs Castle Golf Club,Restaurant/Cafe/Canteen,1,82 Dumbreck Road,Glasgow,G41 4SN,20/02/2013,-4.31102,55.837416\n\
14/02/2014,129276,Hampden - National Stadium,Restaurant/Cafe/Canteen,1,Letherby Drive,Glasgow,G42 9AY,07/11/2013,-4.250578,55.825407\n\
14/02/2014,48317,Handmade Burger Co,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,16/02/2012,-4.342073,55.822898\n\
14/02/2014,607013,Hard Rock Cafe (Glasgow),Restaurant/Cafe/Canteen,1,179 Buchanan Street,Glasgow,G1 2JZ,22/10/2013,-4.253564,55.862947\n\
14/02/2014,511146,Harry Ramsdens,Restaurant/Cafe/Canteen,1,251 Paisley Road,Glasgow,G5 8RA,07/02/2013,-4.272067,55.853574\n\
14/02/2014,511174,Hasta Manana,Restaurant/Cafe/Canteen,1,111 Gorbals Street,Glasgow,G5 9DW,09/01/2014,-4.25294,55.851337\n\
14/02/2014,92276,Hawthorn Bowling Club,Restaurant/Cafe/Canteen,1,15 Cypress Street,Glasgow,G22 6ER,26/07/2010,-4.246095,55.887206\n\
14/02/2014,607023,Haze Lounge,Restaurant/Cafe/Canteen,1,625 Great Western Road,Glasgow,G12 8RE,28/10/2013,-4.286737,55.876733\n\
14/02/2014,548311,Healy\'s,Restaurant/Cafe/Canteen,1,80 Mitchell Street,Glasgow,G1 3NA,10/10/2013,-4.255247,55.859995\n\
14/02/2014,111904,Heera Indian Restaurant,Restaurant/Cafe/Canteen,1,15 Kent Road,Glasgow,G3 7EH,13/09/2013,-4.271744,55.864464\n\
14/02/2014,79737,Henley\'s Byre,Restaurant/Cafe/Canteen,1,43 Byres Road,Glasgow,G11 5RG,29/08/2012,-4.298699,55.871387\n\
14/02/2014,99949,Heritage Food Services         (Daily Record),Restaurant/Cafe/Canteen,1,110 Fifty Pitches Place,Glasgow,G51 4EA,24/04/2012,-4.348098,55.85557\n\
14/02/2014,15655,Heritage Foods Services    (Daily Record),Restaurant/Cafe/Canteen,1,40 Anderston Quay,Glasgow,G3 8DA,23/04/2012,-4.272767,55.857084\n\
14/02/2014,132778,Hillhead Book Club,Restaurant/Cafe/Canteen,1,17 Vinicombe Street,Glasgow,G12 8BE,10/11/2013,-4.290655,55.877298\n\
14/02/2014,108890,Hillhead Sports Club,Restaurant/Cafe/Canteen,1,32 Hughenden Road,Glasgow,G12 9XP,30/07/2010,-4.305399,55.881939\n\
14/02/2014,221721,HM Prison Barlinnie,Restaurant/Cafe/Canteen,1,81 Lee Avenue,Glasgow,G33 2QX,18/09/2013,-4.183981,55.869774\n\
14/02/2014,112546,Ho Wah,Restaurant/Cafe/Canteen,1,95 Kilmarnock Road,Glasgow,,09/08/2012,-4.28372544,55.82835009\n\
14/02/2014,134443,Ho Wong Restaurant,Restaurant/Cafe/Canteen,1,82 York Street,Glasgow,G2 8LE,05/03/2013,-4.262318,55.858481\n\
14/02/2014,26765,Hong Kong Express,Restaurant/Cafe/Canteen,1,437 Sauchiehall Street,Glasgow,G2 3LG,10/03/2013,-4.269064,55.865924\n\
14/02/2014,112956,Ho\'s Chinese Restaurant,Restaurant/Cafe/Canteen,1,16 Kings Place,Glasgow,G22 6LL,18/11/2013,-4.260762,55.892743\n\
14/02/2014,315971,Host Contract Management,Restaurant/Cafe/Canteen,1,21 Tyndrum Street,Glasgow,G4 0JY,20/11/2012,-4.251831,55.869458\n\
14/02/2014,433025,Hot Flame World Buffet,Restaurant/Cafe/Canteen,1,500 Corselet Road,Glasgow,G53 7RN,29/08/2013,-4.35056,55.805839\n\
14/02/2014,406795,Hot Masala,Restaurant/Cafe/Canteen,1,123 Old Castle Road,Glasgow,G44 5TJ,18/12/2013,-4.257262,55.814841\n\
14/02/2014,12,House For An Art Lover,Restaurant/Cafe/Canteen,1,10 Dumbreck Road,Glasgow,G41 5BW,20/06/2013,-4.313765,55.847332\n\
14/02/2014,36132,Hugh\'s,Restaurant/Cafe/Canteen,1,21 Buchanan Street,Glasgow,G1 3HL,28/06/2012,-4.254903,55.859309\n\
14/02/2014,31099,Hummingbird,Restaurant/Cafe/Canteen,1,186 Bath Street,Glasgow,G2 4HG,07/11/2013,-4.262878,55.864807\n\
14/02/2014,36355,Hundred And Nine,Restaurant/Cafe/Canteen,1,109 Bell Street,Glasgow,G4 0TQ,09/08/2011,-4.242103,55.857638\n\
14/02/2014,36273,Hyndland News And Post Office,Restaurant/Cafe/Canteen,1,37 Clarence Drive,Glasgow,G12 9QN,31/08/2010,-4.308192,55.876997\n\
14/02/2014,22894,I Cafe,Restaurant/Cafe/Canteen,1,215 Great Western Road,Glasgow,G4 9EB,17/11/2011,-4.273215,55.872417\n\
14/02/2014,35422,I Cafe,Restaurant/Cafe/Canteen,1,250 Woodlands Road,Glasgow,G3 6ND,21/05/2010,-4.277107,55.871447\n\
14/02/2014,406791,I Chai,Restaurant/Cafe/Canteen,1,1015 Crow Road,Glasgow,G13 1JP,01/11/2013,-4.32204,55.893903\n\
14/02/2014,406784,I Full Coffee,Restaurant/Cafe/Canteen,1,531 Sauchiehall Street,Glasgow,G3 7PQ,25/06/2012,-4.273083,55.866048\n\
14/02/2014,126269,Ichiban,Restaurant/Cafe/Canteen,1,50 Queen Street,Glasgow,G1 3DS,04/03/2013,-4.251673,55.859261\n\
14/02/2014,95683,Ichiban Noodle Cafe,Restaurant/Cafe/Canteen,1,184 Dumbarton Road,Glasgow,G11 6UN,26/11/2012,-4.301203,55.871016\n\
14/02/2014,360868,Ikafe,Restaurant/Cafe/Canteen,1,138 Nithsdale Road,Glasgow,G41 5RB,22/05/2013,-4.275057,55.83913\n\
14/02/2014,17655,IL Cappuccino,Restaurant/Cafe/Canteen,1,503 Victoria Road,Glasgow,G42 8RL,14/05/2013,-4.265019,55.834875\n\
14/02/2014,46639,Il Dente,Restaurant/Cafe/Canteen,1,118 Stockwell Street,Glasgow,G1 4LW,28/09/2013,-4.250571,55.855128\n\
14/02/2014,78065,Il Pavone,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,20/10/2011,-4.253456,55.859156\n\
14/02/2014,133018,In House Cafe,Restaurant/Cafe/Canteen,1,36 Washington Street,Glasgow,G3 8AZ,10/05/2012,-4.26918,55.858328\n\
14/02/2014,17809,India Quay,Restaurant/Cafe/Canteen,1,181 Finnieston Street,Glasgow,G3 8HE,13/01/2014,-4.281259,55.858014\n\
14/02/2014,551903,Indian Cottage,Restaurant/Cafe/Canteen,1,42 Albion Street,Glasgow,G1 1LH,19/05/2013,-4.244412,55.857775\n\
14/02/2014,556099,Indian Cottage,Restaurant/Cafe/Canteen,1,120 Dumbarton Road,Glasgow,G11 6NY,07/07/2013,-4.298685,55.870596\n\
14/02/2014,31030,Indian Gallery,Restaurant/Cafe/Canteen,1,450 Sauchiehall Street,Glasgow,G2 3JD,25/04/2012,-4.26621,55.86604\n\
14/02/2014,46622,Indian Ocean,Restaurant/Cafe/Canteen,1,2 Balornock Road,Glasgow,G21 3UH,26/06/2013,-4.217832,55.889057\n\
14/02/2014,95691,Indian Orchard Restaurant,Restaurant/Cafe/Canteen,1,315 Dumbarton Road,Glasgow,G11 6AL,13/06/2009,-4.306264,55.870643\n\
14/02/2014,406801,Indoor Golf Academies,Restaurant/Cafe/Canteen,1,124 Portman Street,Glasgow,G41 1EJ,14/06/2012,-4.281288,55.851435\n\
14/02/2014,109553,Inglefield Women\'s Hostel,Restaurant/Cafe/Canteen,1,19 Inglefield Street,Glasgow,G42 7AY,28/02/2011,-4.25706,55.841115\n\
14/02/2014,36247,Ingram Wynd,Restaurant/Cafe/Canteen,1,58 Ingram Street,Glasgow,G1 1EX,05/02/2013,-4.243602,55.859525\n\
14/02/2014,35776,Initial Catering Services,Restaurant/Cafe/Canteen,1,199 Renfield Street,Glasgow,G2 3AX,13/07/2010,-4.255778,55.865018\n\
14/02/2014,612670,Inn Deep,Restaurant/Cafe/Canteen,1,445 Great Western Road,Glasgow,G12 8HH,10/11/2013,-4.280988,55.874934\n\
14/02/2014,36459,IR Products,Restaurant/Cafe/Canteen,1,32 Invergarry Place,Glasgow,G46 8UT,15/12/2010,-4.330355,55.799141\n\
14/02/2014,48849,ISS Facility Services Ltd,Restaurant/Cafe/Canteen,1,1048 Govan Road,Glasgow,G51 4XP,22/06/2011,-4.320359,55.864141\n\
14/02/2014,511169,ISS Food And Hospitality (Barclays Wealth),Restaurant/Cafe/Canteen,1,120 Bothwell Street,Glasgow,G2 7JT,13/11/2013,-4.263724,55.861772\n\
14/02/2014,315942,ISS Food And Hospitality(At National Savings And Investment),Restaurant/Cafe/Canteen,1,150 Boydstone Road,Glasgow,G53 6RT,28/03/2012,-4.332329,55.822005\n\
14/02/2014,48790,Italian Bistro,Restaurant/Cafe/Canteen,1,1051 Great Western Road,Glasgow,G12 0XP,05/12/2011,-4.310922,55.884459\n\
14/02/2014,109655,Italian Kitchen,Restaurant/Cafe/Canteen,1,64 Ingram Street,Glasgow,G1 1EX,12/03/2013,-4.243602,55.859525\n\
14/02/2014,82337,Ivory Hotel,Restaurant/Cafe/Canteen,1,4 Camphill Avenue,Glasgow,G41 3AY,21/11/2013,-4.274163,55.82819\n\
14/02/2014,581088,Jack McPhee,Restaurant/Cafe/Canteen,1,261 Hope Street,Glasgow,G2 3PS,22/10/2013,-4.257408,55.865024\n\
14/02/2014,612669,Jacker De Viande,Restaurant/Cafe/Canteen,1,111 West Regent Street,Glasgow,G2 2RU,28/01/2014,-4.259735,55.863265\n\
14/02/2014,221717,Jaconelli\'s Cafe,Restaurant/Cafe/Canteen,1,570 Maryhill Road,Glasgow,G20 7EE,29/02/2012,-4.272905,55.880512\n\
14/02/2014,86687,Jamie T\'s Coffee House,Restaurant/Cafe/Canteen,1,465 Clarkston Road,Glasgow,G44 3LW,05/12/2013,-4.270929,55.8097\n\
14/02/2014,35939,Jamie\'s Italian,Restaurant/Cafe/Canteen,1,1 George Square,Glasgow,G2 1DY,31/10/2012,-4.250847,55.860453\n\
14/02/2014,18344,Java Cafe,Restaurant/Cafe/Canteen,1,130 Rottenrow,Glasgow,G4 0GE,23/04/2013,-4.243053,55.862474\n\
14/02/2014,17761,Java Joes Coffee Co,Restaurant/Cafe/Canteen,1,52 Broomielaw,Glasgow,G1 4QN,30/10/2012,-4.259487,55.856781\n\
14/02/2014,607030,Jaybe\'s Bar-B-Que Co,Restaurant/Cafe/Canteen,1,585 Duke Street,Glasgow,G31 1PY,05/11/2013,-4.215778,55.858636\n\
14/02/2014,624664,Jellyhill,Restaurant/Cafe/Canteen,1,195 Hyndland Road,Glasgow,G12 9HT,09/01/2014,-4.305528,55.876022\n\
14/02/2014,35070,Jewson Cafe,Restaurant/Cafe/Canteen,1,85 David Street,Glasgow,G40 2UH,28/04/2011,-4.217727,55.852463\n\
14/02/2014,433058,JJ Diner,Restaurant/Cafe/Canteen,1,1353 Dumbarton Road,Glasgow,G14 9UZ,14/08/2013,-4.343177,55.875742\n\
14/02/2014,56583,Jobcentre,Restaurant/Cafe/Canteen,1,182 Atlas Road,Glasgow,G21 4TP,03/10/2013,-4.2299,55.881982\n\
14/02/2014,116191,John Lewis,Restaurant/Cafe/Canteen,1,93 Lister Street,Glasgow,G4 0BZ,22/02/2011,-4.242736,55.867503\n\
14/02/2014,371783,John Lewis Cafe,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,G1 2GF,20/12/2012,-4.25248,55.862985\n\
14/02/2014,78069,John Lewis The Place To Eat,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,G1 2GF,20/12/2012,-4.25248,55.862985\n\
14/02/2014,31091,John Paul II Primary School,Restaurant/Cafe/Canteen,1,29 Dunagoil Road,Glasgow,,29/10/2013,-4.23440874,55.80011845\n\
14/02/2014,315990,Jordanhill Bowling Club,Restaurant/Cafe/Canteen,1,112 Randolph Road,Glasgow,G11 7DU,13/04/2012,-4.32395,55.879837\n\
14/02/2014,26979,Jules,Restaurant/Cafe/Canteen,1,328 Argyle Street,Glasgow,G2 8LY,16/12/2009,-4.261711,55.859031\n\
14/02/2014,33840,Juliane,Restaurant/Cafe/Canteen,1,117 Moss Side Road,Glasgow,G41 3UP,04/05/2010,-4.285862,55.832467\n\
14/02/2014,36098,Jumpin\' Jaks,Restaurant/Cafe/Canteen,1,292 Sauchiehall Street,Glasgow,G2 3JA,24/07/2010,-4.263684,55.865763\n\
14/02/2014,29455,Jurassic Jungle,Restaurant/Cafe/Canteen,1,29 Saracen Street,Glasgow,G22 5HT,17/06/2013,-4.25528,55.879308\n\
14/02/2014,27043,K Street Cafe,Restaurant/Cafe/Canteen,1,1 Kay Street,Glasgow,G21 1JY,11/11/2013,-4.230098,55.884036\n\
14/02/2014,315926,K V T A Bath Street,Restaurant/Cafe/Canteen,1,104 Bath Street,Glasgow,G2 2EN,26/03/2012,-4.258163,55.864264\n\
14/02/2014,585886,Ka Ka Lok,Restaurant/Cafe/Canteen,1,175 St Georges Road,Glasgow,G3 6JD,09/09/2013,-4.269402,55.869792\n\
14/02/2014,618959,Kabana Restaurant,Restaurant/Cafe/Canteen,1,64 Seaward Street,Glasgow,G41 1HL,12/11/2013,-4.277816,55.852982\n\
14/02/2014,589591,Kama Sutra Restaurant,Restaurant/Cafe/Canteen,1,331 Sauchiehall Street,Glasgow,G2 3HW,26/09/2013,-4.265169,55.865457\n\
14/02/2014,562669,Kandy Krunch,Restaurant/Cafe/Canteen,1,54 Calton Entry,Glasgow,G40 2SB,19/06/2013,-4.236991,55.854603\n\
14/02/2014,193932,Karemore West End Out Of School Club,Restaurant/Cafe/Canteen,1,110 Otago Street,Glasgow,G12 8NR,26/01/2012,-4.301699,55.881588\n\
14/02/2014,118824,Katrina\'s Cafe (within Intercity Motor Auctions),Restaurant/Cafe/Canteen,1,77 Melbourne Street,Glasgow,G31 1BQ,24/05/2012,-4.23149,55.858154\n\
14/02/2014,18426,Kebabish Grill,Restaurant/Cafe/Canteen,1,323 Victoria Road,Glasgow,G42 7SA,14/12/2013,-4.263854,55.838186\n\
14/02/2014,65030,Kelvindale Bowling Club,Restaurant/Cafe/Canteen,1,91 Baronald Drive,Glasgow,G12 0HP,27/07/2010,-4.302954,55.890594\n\
14/02/2014,556092,Kelvingrove Cafe,Restaurant/Cafe/Canteen,1,1163 Argyle Street,Glasgow,G3 8TB,04/06/2013,-4.285222,55.864816\n\
14/02/2014,111373,Kelvingrove Museum and Art Gallery (KG Cafe And Coffee Bar),Restaurant/Cafe/Canteen,1,1 Kelvingrove Park,Glasgow,G3 8AG,27/01/2011,-4.290564,55.86842\n\
14/02/2014,104710,Kelvinside Academy Playing Grounds,Restaurant/Cafe/Canteen,1,1030 Great Western Road,Glasgow,G12 0NP,29/01/2009,-4.309133,55.884771\n\
14/02/2014,10028,Kember And Jones,Restaurant/Cafe/Canteen,1,134 Byres Road,Glasgow,G12 8TD,24/11/2013,-4.295156,55.873646\n\
14/02/2014,132791,Kenburn Social Club,Restaurant/Cafe/Canteen,1,43 Vulcan Street,Glasgow,G21 4BP,14/05/2010,-4.232732,55.881185\n\
14/02/2014,111791,Kennishead Tenants Hall,Restaurant/Cafe/Canteen,1,10 Kennishead Avenue,Glasgow,G46 8RA,07/10/2010,-4.323675,55.813163\n\
14/02/2014,92234,Kentucky Fried Chicken,Restaurant/Cafe/Canteen,1,20 Cuthbertson Street,Glasgow,G42 7RJ,21/11/2011,-4.265492,55.839171\n\
14/02/2014,18979,Kentucky Fried Chicken,Restaurant/Cafe/Canteen,1,5 Darnley Mains Road,Glasgow,G53 7RH,08/07/2011,-4.340714,55.805056\n\
14/02/2014,53571,Kentucky Fried Chicken,Restaurant/Cafe/Canteen,1,178 Argyle Street,Glasgow,G2 8BT,02/04/2012,-4.256303,55.858645\n\
14/02/2014,56102,Ketchup / Radio / Nude,Restaurant/Cafe/Canteen,1,46 Ashton Lane,Glasgow,G12 8SJ,07/01/2014,-4.292992,55.87463\n\
14/02/2014,47803,KFC,Restaurant/Cafe/Canteen,1,10 Westhorn Drive,Glasgow,G32 8YX,07/10/2013,-4.169764,55.835838\n\
14/02/2014,24903,KFC,Restaurant/Cafe/Canteen,1,382 Helen Street,Glasgow,G51 3AD,22/11/2013,-4.319128,55.853684\n\
14/02/2014,22628,KFC (Great Britain) Ltd,Restaurant/Cafe/Canteen,1,981 Gallowgate,Glasgow,G31 4BW,18/11/2013,-4.212689,55.85489\n\
14/02/2014,82804,Khublai Khan,Restaurant/Cafe/Canteen,1,26 Candleriggs,Glasgow,G1 1LD,15/10/2012,-4.245418,55.857757\n\
14/02/2014,629293,Kids And Adults Together In Sighthill,Restaurant/Cafe/Canteen,1,1 Fountainwell Square,Glasgow,G21 1RL,28/01/2014,-4.238256,55.874092\n\
14/02/2014,360833,Killermont Polo Club,Restaurant/Cafe/Canteen,1,2022 Maryhill Road,Glasgow,G20 0AB,23/08/2013,-4.300785,55.898265\n\
14/02/2014,48958,Kimbles,Restaurant/Cafe/Canteen,1,55 St Enoch Square,Glasgow,G1 4BW,13/09/2013,-4.254458,55.857412\n\
14/02/2014,31107,Kings,Restaurant/Cafe/Canteen,1,64 Renfield Street,Glasgow,G2 1NQ,17/04/2013,-4.255608,55.863475\n\
14/02/2014,132425,King\'s Lodge,Restaurant/Cafe/Canteen,1,91 Union Street,Glasgow,G1 3TA,03/12/2013,-4.257374,55.860297\n\
14/02/2014,65863,King\'s Theatre,Restaurant/Cafe/Canteen,1,297 Bath Street,Glasgow,G2 4JN,10/09/2010,-4.268745,55.865112\n\
14/02/2014,113043,Kingswood Bowling Club,Restaurant/Cafe/Canteen,1,17 Kingsbrae Avenue,Glasgow,G44 4PP,05/04/2011,-4.247809,55.823354\n\
14/02/2014,618965,Kinning Perk,Restaurant/Cafe/Canteen,1,8 Harvie Street,Glasgow,G51 1BW,21/11/2013,-4.289387,55.852767\n\
14/02/2014,36403,Kirstie Birr,Restaurant/Cafe/Canteen,1,22 Parkbrae Avenue,Glasgow,G20 9PH,19/11/2010,-4.265767,55.889712\n\
14/02/2014,22952,Knife And Fork Cafe,Restaurant/Cafe/Canteen,1,460 Duke Street,Glasgow,G31 1QN,05/03/2013,-4.215535,55.85829\n\
14/02/2014,123761,Koh I Noor,Restaurant/Cafe/Canteen,1,225 North Street,Glasgow,G3 7DL,28/05/2013,-4.272258,55.866153\n\
14/02/2014,128384,Konaki,Restaurant/Cafe/Canteen,1,922 Sauchiehall Street,Glasgow,G3 7TF,09/12/2012,-4.284479,55.865774\n\
14/02/2014,25964,Kool Ba,Restaurant/Cafe/Canteen,1,109 Candleriggs,Glasgow,G1 1NP,29/12/2013,-4.2458,55.858838\n\
14/02/2014,10836,KPMG  (Restaurant Associates),Restaurant/Cafe/Canteen,1,191 West George Street,Glasgow,G2 2LB,14/06/2011,-4.258531,55.862334\n\
14/02/2014,200657,Kushion,Restaurant/Cafe/Canteen,1,158 Bath Street,Glasgow,G2 4TB,25/04/2012,-4.260932,55.864609\n\
14/02/2014,19456,La Bodega,Restaurant/Cafe/Canteen,1,1120 South Street,Glasgow,G14 0AP,18/11/2013,-4.354441,55.876947\n\
14/02/2014,48576,La Catering (The Pod),Restaurant/Cafe/Canteen,1,1 Lonmay Road,Glasgow,G33 4EL,02/12/2011,-4.145026,55.865687\n\
14/02/2014,49192,La Famiglia,Restaurant/Cafe/Canteen,1,109 Cleveden Road,Glasgow,G12 0JU,01/12/2011,-4.307365,55.888651\n\
14/02/2014,124638,La Fiorentina,Restaurant/Cafe/Canteen,1,2 Paisley Road West,Glasgow,G51 1LE,07/05/2013,-4.279751,55.853836\n\
14/02/2014,108509,La Lanterna,Restaurant/Cafe/Canteen,1,35 Hope Street,Glasgow,G2 6AE,06/11/2013,-4.259536,55.859557\n\
14/02/2014,104693,La Parmigana,Restaurant/Cafe/Canteen,1,449 Great Western Road,Glasgow,G12 8HH,20/10/2013,-4.280988,55.874934\n\
14/02/2014,95677,La Riviera,Restaurant/Cafe/Canteen,1,147 Dumbarton Road,Glasgow,G11 6PT,29/01/2013,-4.300132,55.87047\n\
14/02/2014,612677,La Rotunda,Restaurant/Cafe/Canteen,1,28 Tunnel Street,Glasgow,G3 8HL,28/11/2013,-4.283461,55.859322\n\
14/02/2014,126907,La Tasca,Restaurant/Cafe/Canteen,1,39 Renfield Street,Glasgow,G2 1JS,11/09/2013,-4.257098,55.861875\n\
14/02/2014,26713,La Tasca,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,26/09/2013,-4.342073,55.822898\n\
14/02/2014,26598,La Vallee Blanche,Restaurant/Cafe/Canteen,1,360 Byres Road,Glasgow,G12 8AR,19/02/2013,-4.290518,55.877408\n\
14/02/2014,15649,La Vita Pizzeria,Restaurant/Cafe/Canteen,1,161 Queen Street,Glasgow,G1 3BJ,26/10/2013,-4.252121,55.860663\n\
14/02/2014,594126,Laboratorio Espresso,Restaurant/Cafe/Canteen,1,93 West Nile Street,Glasgow,G1 2SH,27/01/2014,,\n\
14/02/2014,108514,Ladbrokes Racing Ltd,Restaurant/Cafe/Canteen,1,101 Hope Street,Glasgow,G2 6LL,08/07/2010,-4.259448,55.86079\n\
14/02/2014,36364,Lady Emily Cakes,Restaurant/Cafe/Canteen,1,49 Westland Drive,Glasgow,G14 9PE,31/01/2011,-4.337305,55.879917\n\
14/02/2014,19447,Lamora,Restaurant/Cafe/Canteen,1,1170 Argyle Street,Glasgow,G3 8TE,28/11/2013,-4.28642,55.865621\n\
14/02/2014,114735,Langside Cafe,Restaurant/Cafe/Canteen,1,33 Langside Place,Glasgow,G41 3DL,17/10/2013,-4.272459,55.826901\n\
14/02/2014,114802,Lansdowne Restaurant,Restaurant/Cafe/Canteen,1,7 Lansdowne Crescent,Glasgow,G20 6NQ,19/11/2013,-4.276185,55.874538\n\
14/02/2014,624669,Las Iguanas,Restaurant/Cafe/Canteen,1,18 West Nile Street,Glasgow,G1 2PW,15/01/2014,-4.254967,55.860962\n\
14/02/2014,79544,Lauras Coffee Shop,Restaurant/Cafe/Canteen,1,15 Busby Road,Glasgow,G76 9BY,12/05/2011,-4.235333,55.790382\n\
14/02/2014,507902,Lazarette Cafe,Restaurant/Cafe/Canteen,1,150 Pointhouse Place,Glasgow,G3 8RS,01/02/2013,-4.268697,55.86017\n\
14/02/2014,221700,Le Bistro Beaumartin,Restaurant/Cafe/Canteen,1,161 Hope Street,Glasgow,G2 2UQ,14/01/2014,-4.258531,55.862334\n\
14/02/2014,624652,Leonardo And Co,Restaurant/Cafe/Canteen,1,283 Sauchiehall Street,Glasgow,G2 3HQ,09/01/2014,-4.263947,55.865326\n\
14/02/2014,96002,Lets Eat,Restaurant/Cafe/Canteen,1,10 Dundasvale Court,Glasgow,G4 0JS,27/09/2012,-4.258981,55.868986\n\
14/02/2014,607014,Levy Restaurants,Restaurant/Cafe/Canteen,1,1 Scottish Exhibition Centre,Glasgow,G3 8YW,23/10/2013,-4.288154,55.86087\n\
14/02/2014,594143,Levy Restaurants / SSE Hydro,Restaurant/Cafe/Canteen,1,Congress Road,Glasgow,G3 8YW,09/10/2013,-4.288154,55.86087\n\
14/02/2014,315927,Light Bite,Restaurant/Cafe/Canteen,1,17 Sinclair Drive,Glasgow,G42 9PR,27/08/2013,-4.266867,55.826564\n\
14/02/2014,109656,Lily\'s,Restaurant/Cafe/Canteen,1,103 Ingram Street,Glasgow,G1 1DX,17/08/2010,-4.245656,55.859397\n\
14/02/2014,124156,Linda\'s Lunchbox,Restaurant/Cafe/Canteen,1,420 Old Shettleston Road,Glasgow,G32 7JZ,02/12/2010,-4.16989,55.852417\n\
14/02/2014,48224,Lindens Catering,Restaurant/Cafe/Canteen,1,226 South Street,Glasgow,G11 6JY,12/11/2013,-4.328072,55.870987\n\
14/02/2014,95166,Linthouse Bowling Club,Restaurant/Cafe/Canteen,1,15 Drumoyne Avenue,Glasgow,G51 4AP,20/07/2010,-4.329597,55.860416\n\
14/02/2014,556102,Little Botanica,Restaurant/Cafe/Canteen,1,741 Pollokshaws Road,Glasgow,G41 2AA,06/06/2013,-4.270716,55.835902\n\
14/02/2014,79746,Little Italy,Restaurant/Cafe/Canteen,1,205 Byres Road,Glasgow,G12 8TN,14/05/2013,-4.29507,55.874348\n\
14/02/2014,480305,Little Roma Cafe,Restaurant/Cafe/Canteen,1,16 Norby Road,Glasgow,G11 7BN,27/11/2013,-4.323825,55.876145\n\
14/02/2014,221699,Little SoHo Jordanhill Bar Pizzeria,Restaurant/Cafe/Canteen,1,512 Crow Road,Glasgow,G13 1NU,26/08/2013,-4.325679,55.883894\n\
14/02/2014,129960,Living Room,Restaurant/Cafe/Canteen,1,150 St Vincent Street,Glasgow,G2 5NE,16/06/2010,-4.258872,55.861888\n\
14/02/2014,551901,Locavore,Restaurant/Cafe/Canteen,1,66 Nithsdale Road,Glasgow,G41 2AN,23/05/2013,-4.271241,55.836953\n\
14/02/2014,116796,Loch Fyne Shellfish Bar,Restaurant/Cafe/Canteen,1,192 London Road,Glasgow,G40 1PB,30/09/2011,-4.238478,55.854064\n\
14/02/2014,126056,Lodge Knightswood No.1445,Restaurant/Cafe/Canteen,1,40 Priory Road,Glasgow,G13 2SZ,03/02/2004,-4.337332,55.894988\n\
14/02/2014,96723,Lodging House Mission,Restaurant/Cafe/Canteen,1,35 East Campbell Street,Glasgow,G1 5DT,02/02/2011,-4.237527,55.856148\n\
14/02/2014,75196,Log Cabin Restaurant,Restaurant/Cafe/Canteen,1,32 Bredisholm Road,Glasgow,G69 7HL,16/11/2012,-4.10582,55.850295\n\
14/02/2014,511164,Lola And Livvy\'s,Restaurant/Cafe/Canteen,1,245 Argyle Street,Glasgow,G2 8DL,25/02/2013,-4.258365,55.858383\n\
14/02/2014,116804,London Road Social Club,Restaurant/Cafe/Canteen,1,1524 London Road,Glasgow,G31 4QA,21/05/2009,-4.194612,55.844591\n\
14/02/2014,581096,Loon Fung,Restaurant/Cafe/Canteen,1,417 Sauchiehall Street,Glasgow,G2 3LG,08/06/2013,-4.269064,55.865924\n\
14/02/2014,406812,Lord Hope Cafe,Restaurant/Cafe/Canteen,1,139 St James Road,Glasgow,G4 0LY,22/07/2013,-4.255641,55.866893\n\
14/02/2014,133163,Lord Todd Amenity Centre,Restaurant/Cafe/Canteen,1,11 Weaver Street,Glasgow,G4 0RD,19/12/2013,-4.238014,55.863222\n\
14/02/2014,35805,Lucky 7,Restaurant/Cafe/Canteen,1,166 Bath Street,Glasgow,G2 4TB,19/06/2012,-4.260932,55.864609\n\
14/02/2014,48924,Luigi\'s,Restaurant/Cafe/Canteen,1,1044 Pollokshaws Road,Glasgow,G41 3EB,11/11/2013,-4.279512,55.831471\n\
14/02/2014,10510,Luv Cafe,Restaurant/Cafe/Canteen,1,1121 Govan Road,Glasgow,G51 4RX,23/06/2010,-4.329605,55.864011\n\
14/02/2014,444480,Lychee Oriental,Restaurant/Cafe/Canteen,1,59 Mitchell Street,Glasgow,G1 3LN,22/01/2014,-4.256295,55.859338\n\
14/02/2014,44669,Mabel Mckinlay Tearoom (Glasgow Royal Infirmary),Restaurant/Cafe/Canteen,1,16 Alexandra Parade,Glasgow,G31 2ER,22/11/2012,-4.232265,55.865249\n\
14/02/2014,534335,Mac Snacks,Restaurant/Cafe/Canteen,1,95 Spiersbridge Lane,Glasgow,G46 8AJ,12/03/2013,-4.326339,55.801896\n\
14/02/2014,607021,MacPhees,Restaurant/Cafe/Canteen,1,2234 Paisley Road West,Glasgow,G52 3SJ,28/10/2013,-4.358337,55.846018\n\
14/02/2014,124670,MacPhee\'s Sandwich Bar And Deli,Restaurant/Cafe/Canteen,1,1288 Paisley Road West,Glasgow,G52 1DB,27/04/2012,-4.324414,55.84776\n\
14/02/2014,106408,Mac\'s Cafe,Restaurant/Cafe/Canteen,1,45 Harland Street,Glasgow,G14 0AT,13/11/2009,-4.349091,55.87651\n\
14/02/2014,26419,Maggie May,Restaurant/Cafe/Canteen,1,60 Trongate,Glasgow,G1 5EP,11/06/2013,-4.245757,55.857275\n\
14/02/2014,594141,Maggie\'s Cosy Cottage,Restaurant/Cafe/Canteen,1,29 Buchanan Street,Glasgow,G69 6DY,24/01/2014,-4.11148,55.850962\n\
14/02/2014,25944,Magic Bean Sports Cafe,Restaurant/Cafe/Canteen,1,10 Dougrie Road,Glasgow,G45 9AH,15/08/2013,-4.236396,55.806136\n\
14/02/2014,49062,Magic Grill,Restaurant/Cafe/Canteen,1,1341 Dumbarton Road,Glasgow,G14 9UZ,16/01/2014,-4.343177,55.875742\n\
14/02/2014,48482,Malaga Tapas,Restaurant/Cafe/Canteen,1,213 St Andrews Road,Glasgow,G41 1PD,09/07/2013,-4.274624,55.845663\n\
14/02/2014,49186,Mama\'s Rasoi,Restaurant/Cafe/Canteen,1,82 Howard Street,Glasgow,G1 4EE,23/11/2011,-4.254687,55.856401\n\
14/02/2014,84794,Mamma Mia,Restaurant/Cafe/Canteen,1,14 Castlemilk Arcade,Glasgow,G45 9AA,21/06/2010,-4.235119,55.806689\n\
14/02/2014,31226,Manhattan\'s Bar and Diner,Restaurant/Cafe/Canteen,1,231 St Andrews Road,Glasgow,G41 1PD,20/05/2010,-4.274624,55.845663\n\
14/02/2014,48725,Mansion House,Restaurant/Cafe/Canteen,1,20 Glassford Street,Glasgow,,31/08/2011,-4.24909007,55.85818028\n\
14/02/2014,36421,Marions Coffee Shop,Restaurant/Cafe/Canteen,1,254 Gallowgate,Glasgow,G4 0TS,04/02/2012,-4.236938,55.855063\n\
14/02/2014,26208,Marks And Spencer Outlet,Restaurant/Cafe/Canteen,1,941 Gallowgate,Glasgow,G31 4BW,11/08/2010,-4.212689,55.85489\n\
14/02/2014,315914,Martha\'s,Restaurant/Cafe/Canteen,1,142 St Vincent Street,Glasgow,G2 5LA,19/03/2013,-4.25852,55.861876\n\
14/02/2014,95492,Maryhill Bowling Club,Restaurant/Cafe/Canteen,1,29 Duart Street,Glasgow,G20 0EG,29/01/2010,-4.299646,55.897397\n\
14/02/2014,118067,Maryhill Fire Station,Restaurant/Cafe/Canteen,1,775 Maryhill Road,Glasgow,G20 7TL,22/11/2011,-4.279393,55.882351\n\
14/02/2014,221713,Masala Twist,Restaurant/Cafe/Canteen,1,194 Byres Road,Glasgow,G12 8SN,27/10/2013,-4.293818,55.874803\n\
14/02/2014,511138,Masala Twist,Restaurant/Cafe/Canteen,1,261 Hope Street,Glasgow,G2 3PS,24/07/2013,-4.257465,55.864906\n\
14/02/2014,612674,Massimo,Restaurant/Cafe/Canteen,1,57 Elmbank Street,Glasgow,G2 4PQ,25/11/2013,-4.268436,55.865576\n\
14/02/2014,607015,Master Sun\'s Hotpot,Restaurant/Cafe/Canteen,1,87 Cambridge Street,Glasgow,G3 6RU,23/10/2013,-4.259871,55.866965\n\
14/02/2014,19143,McColls,Restaurant/Cafe/Canteen,1,1 Dundas Street,Glasgow,G1 2AH,09/07/2012,-4.252667,55.862082\n\
14/02/2014,562655,McCune Smith,Restaurant/Cafe/Canteen,1,3 Duke Street,Glasgow,G4 0UL,18/12/2013,-4.238776,55.86035\n\
14/02/2014,612678,McDonalds,Restaurant/Cafe/Canteen,1,47 Castlemilk Arcade,Glasgow,G45 9UB,19/11/2013,-4.233907,55.805867\n\
14/02/2014,134621,McDonalds,Restaurant/Cafe/Canteen,1,10 Westhorn Drive,Glasgow,G32 8YX,07/10/2013,-4.169764,55.835838\n\
14/02/2014,128346,McDonalds,Restaurant/Cafe/Canteen,1,101 Sauchiehall Street,Glasgow,G2 3DD,09/08/2013,-4.256815,55.864442\n\
14/02/2014,20479,McDonalds,Restaurant/Cafe/Canteen,1,1325 Springburn Road,Glasgow,G21 1UU,28/01/2011,-4.232683,55.89286\n\
14/02/2014,36481,McDonalds,Restaurant/Cafe/Canteen,1,17 Monument Drive,Glasgow,G33 1AD,22/06/2012,-4.186996,55.890984\n\
14/02/2014,49087,McDonalds,Restaurant/Cafe/Canteen,1,30 Crow Road,Glasgow,G11 7RY,15/05/2012,-4.312117,55.872286\n\
14/02/2014,118076,McDonalds,Restaurant/Cafe/Canteen,1,1200 Maryhill Road,Glasgow,G20 9BA,27/08/2012,-4.284475,55.886939\n\
14/02/2014,26834,McDonalds,Restaurant/Cafe/Canteen,1,800 Westerhouse Road,Glasgow,G34 9PE,19/01/2013,-4.119997,55.86888\n\
14/02/2014,93186,McDonalds,Restaurant/Cafe/Canteen,1,3 Darnley Mains Road,Glasgow,G53 7RH,09/02/2010,-4.340714,55.805056\n\
14/02/2014,22230,McDonalds,Restaurant/Cafe/Canteen,1,209 Argyle Street,Glasgow,G1 4QD,12/01/2014,-4.257719,55.857981\n\
14/02/2014,140049,McDonald\'s,Restaurant/Cafe/Canteen,1,530 Helen Street,Glasgow,G51 3HR,21/11/2011,-4.32041,55.852671\n\
14/02/2014,26974,McDonalds Bakers,Restaurant/Cafe/Canteen,1,71 Union Street,Glasgow,G1 3TA,10/09/2013,-4.257374,55.860297\n\
14/02/2014,128351,McDonalds Bakers,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,17/02/2012,-4.258023,55.865157\n\
14/02/2014,132209,McDonalds Coffee Shop,Restaurant/Cafe/Canteen,1,121 Trongate,Glasgow,G1 5HF,17/10/2012,-4.248149,55.857177\n\
14/02/2014,95642,McDonalds Restaurant,Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,05/07/2012,-4.199841,55.853449\n\
14/02/2014,104716,McDonalds Restaurants Ltd,Restaurant/Cafe/Canteen,1,1841 Great Western Road,Glasgow,G13 2UX,16/11/2013,-4.329529,55.891307\n\
14/02/2014,27027,McTear\'s Coffee House,Restaurant/Cafe/Canteen,1,31 Meiklewood Road,Glasgow,G51 4GB,10/03/2011,-4.334854,55.853207\n\
14/02/2014,556113,Meat Bar,Restaurant/Cafe/Canteen,1,142 West Regent Street,Glasgow,G2 2RQ,28/10/2013,-4.259858,55.86373\n\
14/02/2014,45038,Mecca Bingo,Restaurant/Cafe/Canteen,1,3 Allerdyce Court,Glasgow,G15 6SA,16/10/2013,-4.376618,55.902864\n\
14/02/2014,129599,Mecca Bingo Club,Restaurant/Cafe/Canteen,1,8 Springfield Quay,Glasgow,G5 8NP,10/05/2006,-4.274804,55.855303\n\
14/02/2014,95635,Mecca Social Club,Restaurant/Cafe/Canteen,1,1221 Duke Street,Glasgow,G31 5NZ,08/06/2012,-4.195897,55.853501\n\
14/02/2014,31354,Mediterraneo,Restaurant/Cafe/Canteen,1,159 Ingram Street,Glasgow,G1 1DW,14/11/2011,-4.247372,55.85951\n\
14/02/2014,45241,Meet N Eat,Restaurant/Cafe/Canteen,1,140 Allison Street,Glasgow,G42 8RP,07/11/2012,-4.263887,55.83628\n\
14/02/2014,48584,Mercado,Restaurant/Cafe/Canteen,1,17 Bell Street,Glasgow,G1 1NU,25/09/2013,-4.245371,55.858333\n\
14/02/2014,571740,Merchant City Casino,Restaurant/Cafe/Canteen,1,18 Glassford Street,Glasgow,G1 1UL,24/07/2013,-4.248704,55.857949\n\
14/02/2014,221710,Metropole,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AF,14/03/2013,-4.342073,55.822898\n\
14/02/2014,9698,Metropolitan,Restaurant/Cafe/Canteen,1,5 Candleriggs,Glasgow,,09/12/2013,-4.245728,55.858291\n\
14/02/2014,624654,Mia Roma,Restaurant/Cafe/Canteen,1,302 Sauchiehall Street,Glasgow,G2 3JA,22/12/2013,-4.263684,55.865763\n\
14/02/2014,119589,Millarbank Social Club/Orange Halls,Restaurant/Cafe/Canteen,1,63 Millarbank Street,Glasgow,G21 1BT,05/11/2012,-4.235195,55.881472\n\
14/02/2014,31085,Miller Primary School,Restaurant/Cafe/Canteen,1,20 Ardencraig Road,Glasgow,G45 0EL,23/06/2010,-4.221889,55.804161\n\
14/02/2014,460412,Milly\'s Bakery And Coffee Shop,Restaurant/Cafe/Canteen,1,425 Carntynehall Road,Glasgow,G32 6LQ,10/01/2014,-4.182354,55.862424\n\
14/02/2014,49176,Mimis,Restaurant/Cafe/Canteen,1,169 London Road,Glasgow,G1 5BX,13/06/2013,-4.239421,55.854622\n\
14/02/2014,84953,Minesota Fats Snooker Club,Restaurant/Cafe/Canteen,1,1055 Cathcart Road,Glasgow,G42 9AF,03/10/2008,-4.258136,55.826895\n\
14/02/2014,19659,Mings,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,30/03/2012,-4.253456,55.859156\n\
14/02/2014,104621,Mitchell Theatre,Restaurant/Cafe/Canteen,1,10 Granville Street,Glasgow,G3 7DR,06/07/2013,-4.273555,55.865644\n\
14/02/2014,133070,Mitchells,Restaurant/Cafe/Canteen,1,107 Waterside Road,Glasgow,G76 9DU,08/09/2010,-4.23462,55.79159\n\
14/02/2014,315951,Mitie Catering Services (Diagio Canteen),Restaurant/Cafe/Canteen,1,99 Borron Street,Glasgow,G4 9XG,27/04/2012,-4.24913,55.87526\n\
14/02/2014,433057,MITIE Catering Services Ltd,Restaurant/Cafe/Canteen,1,45 Robertson Street,Glasgow,G2 8JD,27/11/2013,-4.261742,55.857925\n\
14/02/2014,23154,Molly Malone\'s,Restaurant/Cafe/Canteen,1,1201 Duke Street,Glasgow,,08/06/2012,,\n\
14/02/2014,406781,Molly\'s Cosy Cafe,Restaurant/Cafe/Canteen,1,5 Abbot Street,Glasgow,G41 3XE,23/05/2012,-4.280669,55.831045\n\
14/02/2014,48460,Moniques,Restaurant/Cafe/Canteen,1,32 Lochinver Drive,Glasgow,G44 3NP,14/04/2011,-4.262451,55.81293\n\
14/02/2014,120804,Monteith Hostel,Restaurant/Cafe/Canteen,1,14 Monteith Row,Glasgow,G40 1AY,03/10/2013,-4.237615,55.853235\n\
14/02/2014,9764,Montgomery\'s,Restaurant/Cafe/Canteen,1,9 Radnor Street,Glasgow,G3 7UA,13/07/2011,-4.289284,55.866763\n\
14/02/2014,18955,Morgan Stanley Canteen,Restaurant/Cafe/Canteen,1,55 Douglas Street,Glasgow,G2 7BA,09/07/2010,-4.259844,55.861438\n\
14/02/2014,26155,Morisons Cafe,Restaurant/Cafe/Canteen,1,3 Ravenswood Road,Glasgow,G69 6AG,07/10/2009,-4.106486,55.851974\n\
14/02/2014,134233,Mo\'s Cafe,Restaurant/Cafe/Canteen,1,89 Woodneuk Road,Glasgow,G53 7QS,20/11/2013,-4.350901,55.811495\n\
14/02/2014,114292,Mosspark United Church Lunch Club,Restaurant/Cafe/Canteen,1,67 Ladybank Drive,Glasgow,G52 1EZ,09/09/2011,-4.329418,55.84434\n\
14/02/2014,133541,Mother India,Restaurant/Cafe/Canteen,1,28 Westminster Terrace,Glasgow,G3 7RU,13/12/2013,-4.283345,55.865256\n\
14/02/2014,53599,Mother India Cafe,Restaurant/Cafe/Canteen,1,1355 Argyle Street,Glasgow,G3 8AD,23/06/2010,-4.291216,55.867284\n\
14/02/2014,589589,Motorpoint,Restaurant/Cafe/Canteen,1,60 Hamilton Road,Glasgow,G32 9QN,27/01/2014,-4.152178,55.839814\n\
14/02/2014,112363,Moyra Jaynes,Restaurant/Cafe/Canteen,1,20 Kildrostan Street,Glasgow,G41 4LU,28/11/2011,-4.274819,55.838334\n\
14/02/2014,109191,Mr India,Restaurant/Cafe/Canteen,1,11 Hyndland Street,Glasgow,G11 5QE,25/09/2013,-4.30288,55.871255\n\
14/02/2014,97558,Mr Singh\'s India,Restaurant/Cafe/Canteen,1,149 Elderslie Street,Glasgow,G3 7AW,05/12/2012,-4.276005,55.865724\n\
14/02/2014,36312,Mrs Jones,Restaurant/Cafe/Canteen,1,33 Carlaverock Road,Glasgow,G43 2RZ,14/09/2010,-4.283035,55.818832\n\
14/02/2014,74142,Mt. Vernon Bowling and Ten. Club,Restaurant/Cafe/Canteen,1,Bowling Green Road,Glasgow,G32 0SR,22/08/2013,-4.141941,55.847092\n\
14/02/2014,125751,Mulberry Street,Restaurant/Cafe/Canteen,1,778 Pollokshaws Road,Glasgow,G41 2AE,16/01/2014,-4.270558,55.836472\n\
14/02/2014,406802,Mums The Chef,Restaurant/Cafe/Canteen,1,71 Niddrie Road,Glasgow,G42 8PT,14/06/2012,-4.267814,55.836801\n\
14/02/2014,108516,Mussel Inn,Restaurant/Cafe/Canteen,1,157 Hope Street,Glasgow,G2 2UQ,13/05/2013,-4.258531,55.862334\n\
14/02/2014,556104,My Home Bakery,Restaurant/Cafe/Canteen,1,31 Hyndland Street,Glasgow,G11 5QF,06/06/2013,-4.302704,55.871788\n\
14/02/2014,537390,Myles Better Cafe,Restaurant/Cafe/Canteen,1,1391 Gallowgate,Glasgow,G31 4EX,04/12/2013,-4.198747,55.851896\n\
14/02/2014,594145,N Y Slice,Restaurant/Cafe/Canteen,1,369 Sauchiehall Street,Glasgow,G2 3HU,10/10/2013,-4.267293,55.865696\n\
14/02/2014,594159,Nachos Mexican Restaurant,Restaurant/Cafe/Canteen,1,15 Skirving Street,Glasgow,G41 3AB,24/10/2013,-4.280532,55.829798\n\
14/02/2014,26186,Naked Soup,Restaurant/Cafe/Canteen,1,6 Kersland Street,Glasgow,G12 8BL,10/05/2012,-4.28906,55.877085\n\
14/02/2014,221696,Nanakusa,Restaurant/Cafe/Canteen,1,441 Sauchiehall Street,Glasgow,G2 3LG,01/03/2012,-4.269064,55.865924\n\
14/02/2014,26404,Nandos,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,,01/11/2012,-4.242509842,55.85779953\n\
14/02/2014,35388,Nando\'s,Restaurant/Cafe/Canteen,1,53 St Enoch Square,Glasgow,G1 4DH,19/04/2010,-4.255956,55.857349\n\
14/02/2014,612657,Nando\'s,Restaurant/Cafe/Canteen,1,263 Sauchiehall Street,Glasgow,G2 3EZ,18/11/2013,-4.262562,55.865145\n\
14/02/2014,22052,Nando\'s,Restaurant/Cafe/Canteen,1,3 Springfield Quay,Glasgow,G5 8NP,13/06/2013,-4.274804,55.855303\n\
14/02/2014,18593,Nando\'s Chickenland Ltd,Restaurant/Cafe/Canteen,1,725 Provan Walk,Glasgow,G34 9DY,21/06/2012,-4.138074,55.871218\n\
14/02/2014,551905,Nardini\'s,Restaurant/Cafe/Canteen,1,215 Byres Road,Glasgow,G12 8UD,06/07/2013,-4.294404,55.87499\n\
14/02/2014,432994,NASZ SKLEP,Restaurant/Cafe/Canteen,1,200 Westmuir Street,Glasgow,G31 5BS,07/11/2013,-4.192042,55.85171\n\
14/02/2014,107055,NB Leisure,Restaurant/Cafe/Canteen,1,190 Helen Street,Glasgow,G51 3HZ,15/05/2013,-4.317941,55.857895\n\
14/02/2014,562665,NDR Catering,Restaurant/Cafe/Canteen,1,10 Gartloch Way,Glasgow,G69 8FH,18/06/2013,-4.103972,55.87905\n\
14/02/2014,95719,Neelim,Restaurant/Cafe/Canteen,1,1590 Dumbarton Road,Glasgow,G14 9DB,20/07/2011,-4.352911,55.880194\n\
14/02/2014,433059,Neptune Social Club,Restaurant/Cafe/Canteen,1,101 Clifford Street,Glasgow,G51 1QP,14/02/2013,-4.302724,55.850002\n\
14/02/2014,123447,New Anand Restaurant,Restaurant/Cafe/Canteen,1,76 Nithsdale Road,Glasgow,G41 2AN,09/04/2013,-4.271241,55.836953\n\
14/02/2014,427411,New City Palace,Restaurant/Cafe/Canteen,1,92 Sauchiehall Street,Glasgow,G2 3DE,01/08/2013,-4.256359,55.864846\n\
14/02/2014,19595,New Pearl Of India,Restaurant/Cafe/Canteen,1,1019 Cathcart Road,Glasgow,G42 9XJ,13/09/2011,-4.259091,55.827659\n\
14/02/2014,112550,Newlands Cafe,Restaurant/Cafe/Canteen,1,262 Kilmarnock Road,Glasgow,G43 2XS,02/06/2010,-4.286375,55.824603\n\
14/02/2014,35146,Nick\'s Italian Kitchen Bar and Grill,Restaurant/Cafe/Canteen,1,168 Hyndland Road,Glasgow,G12 9HZ,24/11/2013,-4.306379,55.876348\n\
14/02/2014,102004,Nikkis Sandwich Bar,Restaurant/Cafe/Canteen,1,16 Greenview Street,Glasgow,G43 1SN,16/09/2010,-4.29434,55.826207\n\
14/02/2014,562671,Nippon Kitchen,Restaurant/Cafe/Canteen,1,91 West George Street,Glasgow,G2 1PB,19/11/2013,-4.255654,55.862055\n\
14/02/2014,80662,Niu Cafe,Restaurant/Cafe/Canteen,1,78 Calder Street,Glasgow,G42 7RX,14/04/2010,-4.265169,55.837739\n\
14/02/2014,371796,No 13 Cafe,Restaurant/Cafe/Canteen,1,13 Elder Street,Glasgow,G51 3DY,30/05/2012,-4.318628,55.864326\n\
14/02/2014,618985,No Way Back,Restaurant/Cafe/Canteen,1,38 Nithsdale Road,Glasgow,G41 2AN,11/12/2013,-4.271241,55.836953\n\
14/02/2014,433016,No. 1 Chocolate Factory,Restaurant/Cafe/Canteen,1,63 St Georges Road,Glasgow,G3 6JA,13/01/2014,-4.271141,55.868097\n\
14/02/2014,618976,No16,Restaurant/Cafe/Canteen,1,16 Byres Road,Glasgow,G11 5JY,01/12/2013,-4.298849,55.870674\n\
14/02/2014,10710,Noble Amusements,Restaurant/Cafe/Canteen,1,159 Trongate,Glasgow,G1 5HF,06/08/2010,-4.248149,55.857177\n\
14/02/2014,50020,North British Bowling Club,Restaurant/Cafe/Canteen,1,42 Amulree Street,Glasgow,G32 7UN,10/06/2011,-4.166217,55.851008\n\
14/02/2014,193949,North Star,Restaurant/Cafe/Canteen,1,108 Queen Margaret Drive,Glasgow,G20 8NZ,18/06/2013,-4.284179,55.880546\n\
14/02/2014,19462,November,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,05/09/2012,-4.253456,55.859156\n\
14/02/2014,74061,Nu 2 U St Andrews Church,Restaurant/Cafe/Canteen,1,59 Bowfield Crescent,Glasgow,G52 4HS,14/09/2011,-4.368089,55.851655\n\
14/02/2014,30768,Nur Restaurant,Restaurant/Cafe/Canteen,1,22 Bridge Street,Glasgow,G5 9HR,25/01/2013,-4.25881,55.853935\n\
14/02/2014,47957,O Sole Mio,Restaurant/Cafe/Canteen,1,36 Bath Street,Glasgow,G2 1HE,08/04/2013,-4.259844,55.861438\n\
14/02/2014,25722,O2,Restaurant/Cafe/Canteen,1,8 Elliot Place,Glasgow,,27/11/2009,-4.27924274,55.86093689\n\
14/02/2014,432999,Ocho,Restaurant/Cafe/Canteen,1,10 Speirs Wharf,Glasgow,G4 9TB,24/07/2012,-4.257439,55.872438\n\
14/02/2014,360812,Off Shore,Restaurant/Cafe/Canteen,1,3 Gibson Street,Glasgow,G40 2SN,16/04/2012,-4.235999,55.854855\n\
14/02/2014,193919,Oko Express,Restaurant/Cafe/Canteen,1,80 Queen Street,Glasgow,G1 3DN,28/08/2013,-4.25159,55.859487\n\
14/02/2014,607020,Old Salty\'s,Restaurant/Cafe/Canteen,1,1126 Argyle Street,Glasgow,G3 8TD,28/10/2013,-4.284857,55.865138\n\
14/02/2014,466606,Olympia Bean Machine,Restaurant/Cafe/Canteen,1,14 Orr Street,Glasgow,G40 2AJ,03/09/2013,-4.225721,55.849757\n\
14/02/2014,371798,Once Upon A Tart,Restaurant/Cafe/Canteen,1,45 King Street,Glasgow,G1 5RA,29/07/2013,-4.246414,55.856202\n\
14/02/2014,132453,One A The Square,Restaurant/Cafe/Canteen,1,42 University Avenue,Glasgow,G12 8LX,29/09/2010,-4.285017,55.872486\n\
14/02/2014,432993,One Errol Gardens,Restaurant/Cafe/Canteen,1,1 Errol Gardens,Glasgow,G5 0RA,28/06/2013,-4.249875,55.848625\n\
14/02/2014,112548,One Seven Ate,Restaurant/Cafe/Canteen,1,178 Kilmarnock Road,Glasgow,G41 3PG,27/08/2013,-4.285421,55.826849\n\
14/02/2014,26172,One Ten Bar And Grill/Marks Hotel Kitchen,Restaurant/Cafe/Canteen,1,114 Bath Street,Glasgow,G2 2EN,04/12/2013,-4.258163,55.864264\n\
14/02/2014,19477,One Up/29@Royal Exchange Square,Restaurant/Cafe/Canteen,1,29 Royal Exchange Square,Glasgow,G1 3AJ,28/05/2013,-4.252971,55.859875\n\
14/02/2014,27078,Open Gate Cafe,Restaurant/Cafe/Canteen,1,56 Hecla Square,Glasgow,G15 8NH,28/10/2011,-4.374041,55.909385\n\
14/02/2014,35969,Operetta Restaurant And Cafe Bar,Restaurant/Cafe/Canteen,1,58 Waterloo Street,Glasgow,G2 7DA,03/07/2012,-4.26278,55.860926\n\
14/02/2014,48606,Opium,Restaurant/Cafe/Canteen,1,191 Hope Street,Glasgow,G2 2UL,22/06/2011,-4.258109,55.863061\n\
14/02/2014,10375,Oran-Mor,Restaurant/Cafe/Canteen,1,731 Great Western Road,Glasgow,G12 8QX,22/07/2013,-4.289157,55.87738\n\
14/02/2014,84989,Orbit,Restaurant/Cafe/Canteen,1,101 St James Road,Glasgow,G4 0NS,30/01/2004,-4.24065,55.863767\n\
14/02/2014,556098,Oriental Delight,Restaurant/Cafe/Canteen,1,10 Hillington Road South,Glasgow,G52 2AA,05/06/2013,-4.358496,55.846527\n\
14/02/2014,104704,Oriental West,Restaurant/Cafe/Canteen,1,609 Great Western Road,Glasgow,G12 8HX,11/03/2013,-4.285399,55.876263\n\
14/02/2014,48752,Origins,Restaurant/Cafe/Canteen,1,1359 South Street,Glasgow,G14 0XN,26/11/2012,-4.364664,55.881272\n\
14/02/2014,95034,Orion Way,Restaurant/Cafe/Canteen,1,3 Drumhead Place,Glasgow,G32 8EY,30/08/2013,-4.174951,55.832052\n\
14/02/2014,48356,Oscar and Holly\'s,Restaurant/Cafe/Canteen,1,301 Crow Road,Glasgow,G11 7BU,08/09/2011,-4.322212,55.877245\n\
14/02/2014,68049,Pancho Villa\'s,Restaurant/Cafe/Canteen,1,26 Bell Street,Glasgow,G1 1LG,27/08/2013,-4.245398,55.857964\n\
14/02/2014,22489,Panda,Restaurant/Cafe/Canteen,1,3 Springfield Quay,Glasgow,G5 8NP,04/12/2013,-4.274804,55.855303\n\
14/02/2014,444482,Panevino,Restaurant/Cafe/Canteen,1,1075 Argyle Street,Glasgow,G3 8LZ,20/08/2012,-4.2832,55.864144\n\
14/02/2014,495610,Papa Tony\'s,Restaurant/Cafe/Canteen,1,4 Springfield Quay,Glasgow,G5 8NP,04/12/2012,-4.274804,55.855303\n\
14/02/2014,511121,Papercup Coffee Company,Restaurant/Cafe/Canteen,1,603 Great Western Road,Glasgow,G12 8HX,21/10/2013,-4.285399,55.876263\n\
14/02/2014,15244,Paperino\'s,Restaurant/Cafe/Canteen,1,227 Byres Road,Glasgow,,04/11/2013,-4.29410291,55.87503818\n\
14/02/2014,31371,Paradise (Persian) Restaurant,Restaurant/Cafe/Canteen,1,411 Great Western Road,Glasgow,G4 9JA,27/11/2013,-4.278692,55.874221\n\
14/02/2014,107100,Parkhead Bowling Club,Restaurant/Cafe/Canteen,1,111 Helenvale Street,Glasgow,G31 4TF,28/04/2011,-4.19682,55.850034\n\
14/02/2014,562662,Parkway Coffee Limited,Restaurant/Cafe/Canteen,1,260 Springhill Parkway,Glasgow,G69 6GA,18/06/2013,-4.113719,55.860711\n\
14/02/2014,95688,Partick South Church Vestibule Tearoom,Restaurant/Cafe/Canteen,1,259 Dumbarton Road,Glasgow,G11 6AB,28/10/2013,-4.303939,55.870516\n\
14/02/2014,115150,Partick Trinity Parish Church,Restaurant/Cafe/Canteen,1,20 Lawrence Street,Glasgow,G11 5HQ,24/06/2008,-4.297376,55.873065\n\
14/02/2014,79742,Patisserie Francoise,Restaurant/Cafe/Canteen,1,138 Byres Road,Glasgow,G12 8TD,01/02/2011,-4.295156,55.873646\n\
14/02/2014,31189,Patisserie Irrocco,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,18/03/2011,-4.253456,55.859156\n\
14/02/2014,594123,Patisserie Valerie,Restaurant/Cafe/Canteen,1,19 West Nile Street,Glasgow,G1 2PS,08/10/2013,-4.255774,55.8611\n\
14/02/2014,571734,Patisserie Valerie,Restaurant/Cafe/Canteen,1,79 Gordon Street,Glasgow,G1 3SQ,12/12/2013,-4.258211,55.859302\n\
14/02/2014,48769,PaulnKal Cafe,Restaurant/Cafe/Canteen,1,48 Clarendon Place,Glasgow,G20 7PZ,18/07/2013,-4.268071,55.87165\n\
14/02/2014,102831,Peckhams,Restaurant/Cafe/Canteen,1,61 Glassford Street,Glasgow,G1 1UG,22/04/2013,-4.249347,55.858566\n\
14/02/2014,36360,Peckish,Restaurant/Cafe/Canteen,1,41 West Nile Street,Glasgow,G1 2PT,26/10/2012,-4.255448,55.861807\n\
14/02/2014,221734,Pelican Bar-Bistro,Restaurant/Cafe/Canteen,1,1377 Argyle Street,Glasgow,G3 8AF,16/10/2013,-4.29177,55.867723\n\
14/02/2014,131096,Pelican Cafe,Restaurant/Cafe/Canteen,1,763 Shettleston Road,Glasgow,G32 7NN,15/12/2011,-4.176627,55.852325\n\
14/02/2014,315913,Pesto,Restaurant/Cafe/Canteen,1,57 St Vincent Street,Glasgow,G1 2PF,29/03/2012,-4.255004,55.861051\n\
14/02/2014,36330,Peters West End,Restaurant/Cafe/Canteen,1,39 Hyndland Street,Glasgow,G11 5QF,24/10/2013,-4.302704,55.871788\n\
14/02/2014,594115,Petite Cafe,Restaurant/Cafe/Canteen,1,134 Newlands Road,Glasgow,G44 4ER,09/10/2013,-4.267372,55.817962\n\
14/02/2014,36367,Philpotts,Restaurant/Cafe/Canteen,1,81 Bothwell Street,Glasgow,G2 6TS,07/09/2012,-4.261475,55.861031\n\
14/02/2014,110732,Piazza Italia,Restaurant/Cafe/Canteen,1,15 John Street,Glasgow,G1 1HP,22/05/2013,-4.248133,55.860233\n\
14/02/2014,25152,Piccolo Mondo,Restaurant/Cafe/Canteen,1,344 Argyle Street,Glasgow,G2 8LY,25/07/2012,-4.261711,55.859031\n\
14/02/2014,221708,Picolino Cafe Boyd Orr Building,Restaurant/Cafe/Canteen,1,70 University Avenue,Glasgow,G12 8LS,08/03/2012,-4.286157,55.872843\n\
14/02/2014,26797,Piece,Restaurant/Cafe/Canteen,1,1056 Argyle Street,Glasgow,G3 8LY,12/09/2013,-4.283491,55.864741\n\
14/02/2014,624657,Pigout,Restaurant/Cafe/Canteen,1,8 White Cart Court,Glasgow,G43 2AT,06/01/2014,-4.285911,55.824593\n\
14/02/2014,315909,Pinata,Restaurant/Cafe/Canteen,1,2 Byres Road,Glasgow,,31/01/2012,-4.29956881,55.87059235\n\
14/02/2014,48722,Pinto,Restaurant/Cafe/Canteen,1,140 Queen Street,Glasgow,G1 3BX,16/04/2013,-4.251413,55.860299\n\
14/02/2014,36321,Pin-Up Cheeses Ltd,Restaurant/Cafe/Canteen,1,43 Lochlea Road,Glasgow,G43 2XZ,08/09/2011,-4.289733,55.820891\n\
14/02/2014,21901,Pitstop Cafe,Restaurant/Cafe/Canteen,1,127 Craighall Road,Glasgow,G4 9TP,15/10/2009,-4.255295,55.877097\n\
14/02/2014,15674,Pit-Stop Cafe,Restaurant/Cafe/Canteen,1,291 Drakemire Drive,Glasgow,G45 9SS,03/07/2012,-4.252288,55.803068\n\
14/02/2014,571736,Pizza Express,Restaurant/Cafe/Canteen,1,20 Provan Walk,Glasgow,G34 9DL,06/11/2013,-4.136909,55.872982\n\
14/02/2014,126273,Pizza Express,Restaurant/Cafe/Canteen,1,151 Queen Street,Glasgow,G1 3BJ,18/04/2012,-4.252121,55.860663\n\
14/02/2014,128374,Pizza Express,Restaurant/Cafe/Canteen,1,436 Sauchiehall Street,Glasgow,G2 3JD,14/01/2011,-4.26621,55.86604\n\
14/02/2014,371800,Pizza Express,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,22/05/2012,-4.253456,55.859156\n\
14/02/2014,18539,Pizza Hut,Restaurant/Cafe/Canteen,1,380 Helen Street,Glasgow,G51 3AD,06/02/2012,-4.319128,55.853684\n\
14/02/2014,22360,Pizza Hut,Restaurant/Cafe/Canteen,1,881 Gallowgate,Glasgow,G31 4BW,18/11/2013,-4.212689,55.85489\n\
14/02/2014,606995,Pizza Hut,Restaurant/Cafe/Canteen,1,2 Allerdyce Court,Glasgow,G15 6SA,16/10/2013,-4.376618,55.902864\n\
14/02/2014,23152,Pizza Hut,Restaurant/Cafe/Canteen,1,735 Provan Walk,Glasgow,G34 9DY,20/10/2013,-4.138074,55.871218\n\
14/02/2014,133320,Pizza Hut,Restaurant/Cafe/Canteen,1,85 West George Street,Glasgow,G2 1QG,14/10/2013,-4.254805,55.862016\n\
14/02/2014,26673,Pizza Hut,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,26/10/2010,-4.342073,55.822898\n\
14/02/2014,200660,Pizza Hut (uk) Ltd,Restaurant/Cafe/Canteen,1,203 Argyle Street,Glasgow,G2 8BU,14/08/2013,-4.256445,55.858068\n\
14/02/2014,36373,Plan B Books Ltd,Restaurant/Cafe/Canteen,1,5 Osborne Street,Glasgow,G1 5QN,12/04/2011,-4.246067,55.856002\n\
14/02/2014,460438,Play Kingdom And King And Queen Cafe,Restaurant/Cafe/Canteen,1,1201 Duke Street,Glasgow,,17/01/2014,,\n\
14/02/2014,103640,Polish Ex Servicemen\'s Club,Restaurant/Cafe/Canteen,1,26 Glenfarg Street,Glasgow,G20 7QF,04/06/2010,-4.266888,55.872741\n\
14/02/2014,36358,Polish Taste,Restaurant/Cafe/Canteen,1,129 London Road,Glasgow,G1 5BS,11/11/2013,-4.24069,55.855021\n\
14/02/2014,114795,Pollok Community Education Centre Cafe,Restaurant/Cafe/Canteen,1,134 Langton Road,Glasgow,G53 5DP,23/02/2012,-4.340922,55.830299\n\
14/02/2014,123183,Pollok F.C. Social Club,Restaurant/Cafe/Canteen,1,16 Newlandsfield Road,Glasgow,G43 2XU,02/08/2012,-4.287715,55.823229\n\
14/02/2014,65394,Pollok Golf Club,Restaurant/Cafe/Canteen,1,100 Barrhead Road,Glasgow,G43 1BG,24/01/2012,-4.307365,55.822368\n\
14/02/2014,125767,Pollok House,Restaurant/Cafe/Canteen,1,2060 Pollokshaws Road,Glasgow,G43 1AT,28/03/2013,-4.303363,55.823261\n\
14/02/2014,48115,Pollokshaws Bowling Club,Restaurant/Cafe/Canteen,1,2114 Pollokshaws Road,Glasgow,G43 1AT,23/03/2011,-4.303363,55.823261\n\
14/02/2014,10728,Polmadie Cafe,Restaurant/Cafe/Canteen,1,63 Jessie Street,Glasgow,G42 0PG,21/04/2010,-4.241869,55.834706\n\
14/02/2014,80668,Polmadie Fire Station,Restaurant/Cafe/Canteen,1,560 Calder Street,Glasgow,G42 0PA,06/05/2011,-4.246393,55.835064\n\
14/02/2014,133940,Polo Lounge/Trophy Room,Restaurant/Cafe/Canteen,1,84 Wilson Street,Glasgow,,29/03/2010,-4.24981534,55.8588599\n\
14/02/2014,123652,Port Dundas Distillery Works Canteen,Restaurant/Cafe/Canteen,1,80 North Canal Bank Street,Glasgow,G4 9XL,22/01/2009,-4.250056,55.873023\n\
14/02/2014,35276,Portofino Catering,Restaurant/Cafe/Canteen,1,320 Kinfauns Drive,Glasgow,G15 7HA,13/05/2013,-4.36751,55.91644\n\
14/02/2014,26810,Posh Nosh,Restaurant/Cafe/Canteen,1,86 Maryhill Road,Glasgow,G20 7QB,28/08/2013,-4.268573,55.872296\n\
14/02/2014,64370,Possilpark Masonic Social Club,Restaurant/Cafe/Canteen,1,83 Bardowie Street,Glasgow,G22 5ET,10/05/2010,-4.25364,55.883571\n\
14/02/2014,562691,Pot And Kettle BX Ltd,Restaurant/Cafe/Canteen,1,16 Bridgeton Cross,Glasgow,G40 1BW,20/06/2013,-4.227152,55.849084\n\
14/02/2014,410614,Pret A Manger,Restaurant/Cafe/Canteen,1,146 Queen Street,Glasgow,G1 3BS,06/09/2013,-4.251307,55.860669\n\
14/02/2014,26113,Pret A Manger,Restaurant/Cafe/Canteen,1,27 Gordon Street,Glasgow,G1 3PL,10/09/2013,-4.255164,55.860212\n\
14/02/2014,48032,Prezzo,Restaurant/Cafe/Canteen,1,35 St Vincent Place,Glasgow,G1 2ER,17/09/2013,-4.25373,55.86085\n\
14/02/2014,581110,Prezzo,Restaurant/Cafe/Canteen,1,30 Provan Walk,Glasgow,G34 9DL,06/11/2013,-4.136909,55.872982\n\
14/02/2014,26506,Prezzo,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,06/06/2011,-4.342073,55.822898\n\
14/02/2014,360749,Priesthill And Nitshill Parish Church,Restaurant/Cafe/Canteen,1,100 Priesthill Road,Glasgow,G53 6PG,26/04/2012,-4.348508,55.817616\n\
14/02/2014,23311,Pulcinella,Restaurant/Cafe/Canteen,1,167 Hope Street,Glasgow,G2 2UQ,25/01/2014,-4.258531,55.862334\n\
14/02/2014,571728,Punjabi Charing Cross,Restaurant/Cafe/Canteen,1,157 North Street,Glasgow,G3 7DA,22/10/2013,-4.27159,55.864026\n\
14/02/2014,129772,Q  Club,Restaurant/Cafe/Canteen,1,101 St Georges Road,Glasgow,G3 6JA,15/10/2013,-4.271141,55.868097\n\
14/02/2014,22962,Qua,Restaurant/Cafe/Canteen,1,68 Ingram Street,Glasgow,G1 1EX,26/01/2012,-4.243602,55.859525\n\
14/02/2014,132315,Quadrant Catering Ltd,Restaurant/Cafe/Canteen,1,20 Turner Road,Glasgow,G21 4AA,21/08/2012,-4.215022,55.878188\n\
14/02/2014,132459,Queen Margaret Union,Restaurant/Cafe/Canteen,1,22 University Gardens,Glasgow,,07/03/2011,-4.291292,55.873235\n\
14/02/2014,132672,Queen\'s Cafe,Restaurant/Cafe/Canteen,1,515 Victoria Road,Glasgow,G42 8BH,20/05/2009,-4.265291,55.83407\n\
14/02/2014,75661,R and D\'s Cafe,Restaurant/Cafe/Canteen,1,125 Bridgegate,Glasgow,G1 5HY,09/12/2013,-4.248413,55.854566\n\
14/02/2014,185675,Rawalpindi,Restaurant/Cafe/Canteen,1,321 Sauchiehall Street,Glasgow,G2 3HW,25/09/2013,-4.265169,55.865457\n\
14/02/2014,148246,Reardon\'s,Restaurant/Cafe/Canteen,1,1060 Pollokshaws Road,Glasgow,G41 3EB,22/10/2013,-4.279512,55.831471\n\
14/02/2014,122943,Reardon\'s,Restaurant/Cafe/Canteen,1,42 New City Road,Glasgow,,16/09/2010,-4.26125133,55.86875407\n\
14/02/2014,26079,Re-charge Bar,Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,18/04/2011,-4.199841,55.853449\n\
14/02/2014,133300,Red Onion,Restaurant/Cafe/Canteen,1,257 West Campbell Street,Glasgow,G2 4SQ,12/07/2012,-4.261148,55.864192\n\
14/02/2014,65862,Renfields St Stephens / Oasis Cafe,Restaurant/Cafe/Canteen,1,256 Bath Street,Glasgow,G2 4JW,10/08/2011,-4.265885,55.86512\n\
14/02/2014,315972,Response House Cafe,Restaurant/Cafe/Canteen,1,1 Swan Street,Glasgow,G4 0AX,12/12/2012,-4.249331,55.869055\n\
14/02/2014,25986,Restaurant Bar And Grill,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,22/04/2013,-4.253456,55.859156\n\
14/02/2014,123449,Rhubarb,Restaurant/Cafe/Canteen,1,122 Nithsdale Road,Glasgow,G41 5RB,31/05/2013,-4.275057,55.83913\n\
14/02/2014,129213,Riddrie Bowling Club,Restaurant/Cafe/Canteen,1,90 Smithycroft Road,Glasgow,G33 2RQ,27/08/2009,-4.188479,55.868193\n\
14/02/2014,80715,Riding For The Disabled Assoc.,Restaurant/Cafe/Canteen,1,75 Caldercuilt Road,Glasgow,G23 5NA,22/06/2011,-4.298562,55.905299\n\
14/02/2014,360865,Riley\'s Snooker Club,Restaurant/Cafe/Canteen,1,130 Ledard Road,Glasgow,G42 9RA,14/05/2012,-4.268081,55.824663\n\
14/02/2014,511155,Rishi\'s Indian Aroma,Restaurant/Cafe/Canteen,1,61 Bath Street,Glasgow,G2 2DG,23/07/2013,-4.256948,55.863694\n\
14/02/2014,33923,Ritchie\'s Rolls,Restaurant/Cafe/Canteen,1,146 Crail Street,Glasgow,G31 5RA,12/02/2010,-4.191251,55.849864\n\
14/02/2014,46678,Riverside Museum,Restaurant/Cafe/Canteen,1,100 Pointhouse Place,Glasgow,G3 8RS,10/12/2012,-4.268697,55.86017\n\
14/02/2014,10734,Roastit Bubbly Jock,Restaurant/Cafe/Canteen,1,450 Dumbarton Road,Glasgow,G11 6SE,12/01/2012,-4.311576,55.870984\n\
14/02/2014,556090,Robroyston Church Cafe,Restaurant/Cafe/Canteen,1,34 Saughs Drive,Glasgow,G33 1HH,23/11/2013,-4.178642,55.892885\n\
14/02/2014,516679,Rock Lobster,Restaurant/Cafe/Canteen,1,35 Virginia Street,Glasgow,G1 1TN,19/06/2013,-4.250545,55.858544\n\
14/02/2014,67436,Rolls Royce Social Club,Restaurant/Cafe/Canteen,1,1 Beech Avenue,Glasgow,G41 5DF,19/06/2010,-4.304835,55.850034\n\
14/02/2014,36344,Roma Restaurant,Restaurant/Cafe/Canteen,1,46 Bath Street,Glasgow,,07/02/2012,-4.25574678,55.86376405\n\
14/02/2014,315954,Rose and Grants,Restaurant/Cafe/Canteen,1,27 Trongate,Glasgow,G1 5EZ,22/06/2012,-4.244611,55.856523\n\
14/02/2014,23270,Rowan Restaurant,Restaurant/Cafe/Canteen,1,2 Haghill Road,Glasgow,G31 3SR,08/11/2011,-4.202495,55.858569\n\
14/02/2014,129961,Royal College Of Physicians,Restaurant/Cafe/Canteen,1,234 St Vincent Street,Glasgow,G2 5RQ,27/10/2011,-4.262576,55.862377\n\
14/02/2014,128338,Royal Concert Hall,Restaurant/Cafe/Canteen,1,2 Sauchiehall Street,Glasgow,G2 3NY,25/01/2011,-4.25261,55.864681\n\
14/02/2014,126979,Royal Conservatoire Of Scotland,Restaurant/Cafe/Canteen,1,100 Renfrew Street,Glasgow,G2 3DB,02/11/2012,-4.257666,55.866152\n\
14/02/2014,556118,Royal Voluntary Service (Maternity Block),Restaurant/Cafe/Canteen,1,1345 Govan Road,Glasgow,G51 4TF,10/03/2008,-4.337594,55.863985\n\
14/02/2014,97197,Royal Workshops For The Blind (Blindcraft),Restaurant/Cafe/Canteen,1,5 Edgefauld Avenue,Glasgow,,28/04/2009,-4.22437459,55.87997586\n\
14/02/2014,127780,Royston Primary School,Restaurant/Cafe/Canteen,1,102 Royston Road,Glasgow,G21 2NU,04/11/2011,-4.229021,55.869155\n\
14/02/2014,129188,Ruchill Family Project,Restaurant/Cafe/Canteen,1,61 Smeaton Street,Glasgow,G20 9JS,15/01/2014,-4.272972,55.889849\n\
14/02/2014,444496,Ruff And Tumble,Restaurant/Cafe/Canteen,1,181 Shawbridge Street,Glasgow,G43 1QN,04/11/2013,-4.299726,55.821684\n\
14/02/2014,495627,Rumbling Tum Cafe,Restaurant/Cafe/Canteen,1,10 Bain Street,Glasgow,G40 2LA,13/01/2014,-4.235681,55.854879\n\
14/02/2014,46460,Rumour\'s,Restaurant/Cafe/Canteen,1,21 Bath Street,Glasgow,G2 1HY,03/02/2011,-4.254032,55.863307\n\
14/02/2014,31219,Rustica,Restaurant/Cafe/Canteen,1,16 Grantlea Terrace,Glasgow,G32 9JN,27/06/2013,-4.144555,55.846696\n\
14/02/2014,104347,RVS Cafe Outpatients Dept,Restaurant/Cafe/Canteen,1,1345 Govan Road,Glasgow,G51 4TF,13/06/2012,-4.337594,55.863985\n\
14/02/2014,562694,S.G.N.,Restaurant/Cafe/Canteen,1,95 Kilbirnie Street,Glasgow,G5 8JD,27/06/2013,-4.265044,55.846289\n\
14/02/2014,101150,Saffron Catering,Restaurant/Cafe/Canteen,1,111 French Street,Glasgow,G40 4DP,30/05/2013,-4.219966,55.845969\n\
14/02/2014,31172,Sainsburys,Restaurant/Cafe/Canteen,1,240 Buchanan Street,Glasgow,G1 2GF,02/08/2013,-4.25248,55.862985\n\
14/02/2014,31171,Sainsburys,Restaurant/Cafe/Canteen,1,10 Darnley Mains Road,Glasgow,G53 7RH,15/03/2010,-4.340714,55.805056\n\
14/02/2014,31174,Sainsburys,Restaurant/Cafe/Canteen,1,80 Crow Road,Glasgow,G11 7RY,23/02/2010,-4.312117,55.872286\n\
14/02/2014,35046,Sainsbury\'s Staff Canteen,Restaurant/Cafe/Canteen,1,20 Allerdyce Drive,Glasgow,G15 6RY,09/04/2010,-4.372552,55.90518\n\
14/02/2014,87563,Salvation Army,Restaurant/Cafe/Canteen,1,14 Clyde Street,Glasgow,G1 5JH,20/08/2010,-4.247773,55.853724\n\
14/02/2014,36186,Samantha\'s,Restaurant/Cafe/Canteen,1,104 Arcadia Street,Glasgow,G40 1DP,07/10/2013,-4.232521,55.849652\n\
14/02/2014,128143,Sandbank Social Club,Restaurant/Cafe/Canteen,1,26 Sandbank Street,Glasgow,G20 0PJ,17/09/2010,-4.293588,55.892046\n\
14/02/2014,50021,Sandyhills Bowling Club,Restaurant/Cafe/Canteen,1,299 Amulree Street,Glasgow,G32 7SJ,02/06/2009,-4.165576,55.847254\n\
14/02/2014,128293,Sandyhills Golf Club,Restaurant/Cafe/Canteen,1,223 Sandyhills Road,Glasgow,G32 9NA,06/07/2012,-4.151084,55.845746\n\
14/02/2014,571745,Santander,Restaurant/Cafe/Canteen,1,301 St Vincent Street,Glasgow,G2 5HN,01/08/2013,-4.267497,55.86234\n\
14/02/2014,49133,Sapori D\'Italia,Restaurant/Cafe/Canteen,1,1102 Cathcart Road,Glasgow,G42 9EG,09/02/2012,-4.257464,55.825496\n\
14/02/2014,31220,Sapporo Teppanyaki,Restaurant/Cafe/Canteen,1,6 Ingram Street,Glasgow,G1 1EZ,20/11/2013,-4.242543,55.859445\n\
14/02/2014,31084,Sarti,Restaurant/Cafe/Canteen,1,133 Wellington Street,Glasgow,G2 2XD,17/09/2013,-4.259517,55.863907\n\
14/02/2014,18767,Sarti,Restaurant/Cafe/Canteen,1,121 Bath Street,Glasgow,G2 2SZ,17/09/2013,-4.259457,55.863971\n\
14/02/2014,460425,Savoy Diner,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,11/04/2013,-4.258023,55.865157\n\
14/02/2014,444464,Scoop Events Ltd,Restaurant/Cafe/Canteen,1,125 Causewayside Street,Glasgow,G32 8LP,17/10/2013,-4.171721,55.838562\n\
14/02/2014,22295,Scotbeef Limited,Restaurant/Cafe/Canteen,1,46 Penston Road,Glasgow,G33 4AG,02/09/2011,-4.143689,55.866654\n\
14/02/2014,9717,Scotstoun First Bus Depot (Staff Canteen),Restaurant/Cafe/Canteen,1,South Street,Glasgow,,05/08/2011,-4.326042,55.870542\n\
14/02/2014,50802,Scotstounhill Bowling Club,Restaurant/Cafe/Canteen,1,633 Anniesland Road,Glasgow,G14 0XY,30/04/2012,-4.358825,55.885177\n\
14/02/2014,26472,Scottish Government,Restaurant/Cafe/Canteen,1,150 Broomielaw,Glasgow,G2 8LU,27/10/2009,-4.264877,55.857418\n\
14/02/2014,61154,Scottish Mask And Puppet Centre,Restaurant/Cafe/Canteen,1,10 Balcarres Avenue,Glasgow,G12 0QF,04/05/2012,-4.297316,55.885855\n\
14/02/2014,124876,Scottish Youth Hostels,Restaurant/Cafe/Canteen,1,8 Park Terrace,Glasgow,G3 6BY,20/08/2012,-4.280599,55.869656\n\
14/02/2014,19688,Seewoo Restaurant,Restaurant/Cafe/Canteen,1,29 Saracen Street,Glasgow,G22 5HT,30/04/2013,-4.25528,55.879308\n\
14/02/2014,49064,Sesame,Restaurant/Cafe/Canteen,1,1030 Dumbarton Road,Glasgow,G14 9UL,26/06/2013,-4.331572,55.873105\n\
14/02/2014,36354,Seven Dumplings,Restaurant/Cafe/Canteen,1,17 Dalnair Street,Glasgow,G3 8SD,18/05/2011,-4.293938,55.86709\n\
14/02/2014,511172,Shanghai Shuffle,Restaurant/Cafe/Canteen,1,256 Bath Street,Glasgow,G2 4JW,23/01/2013,-4.265885,55.86512\n\
14/02/2014,581103,Shanti Bevan Elderly Day Care,Restaurant/Cafe/Canteen,1,40 Kinfauns Drive,Glasgow,G15 7TS,14/08/2013,-4.371041,55.909784\n\
14/02/2014,427414,Share Scotland,Restaurant/Cafe/Canteen,1,9 Midlock Street,Glasgow,G51 1SL,14/07/2012,-4.29936,55.852006\n\
14/02/2014,128738,Shawbank Social  Club,Restaurant/Cafe/Canteen,1,133 Shawbridge Street,Glasgow,G43 1QQ,01/04/2011,-4.296168,55.822263\n\
14/02/2014,125759,Shawlands Cross Church Of Scotland (Cul De Sac Cafe),Restaurant/Cafe/Canteen,1,1114 Pollokshaws Road,Glasgow,G41 3TJ,17/06/2009,-4.286549,55.837721\n\
14/02/2014,360869,Shawlands Old Church,Restaurant/Cafe/Canteen,1,1120 Pollokshaws Road,Glasgow,G41 3QP,01/05/2012,-4.285745,55.829656\n\
14/02/2014,10341,Sheerin Palace,Restaurant/Cafe/Canteen,1,298 Allison Street,Glasgow,G42 8HQ,24/10/2013,-4.25835,55.835258\n\
14/02/2014,26824,Shell\'s Cafe,Restaurant/Cafe/Canteen,1,4 Elibank Street,Glasgow,G33 3QN,24/08/2011,-4.171279,55.869298\n\
14/02/2014,104622,Shenaz,Restaurant/Cafe/Canteen,1,17 Granville Street,Glasgow,G3 7EE,22/08/2012,-4.274049,55.865077\n\
14/02/2014,123454,Sherbrooke St Gilberts Church,Restaurant/Cafe/Canteen,1,247 Nithsdale Road,Glasgow,G41 5AQ,01/06/2010,-4.299322,55.843523\n\
14/02/2014,91942,Shettleston Bowling Club,Restaurant/Cafe/Canteen,1,53 Culrain Street,Glasgow,G32 7AB,27/08/2012,-4.172759,55.850003\n\
14/02/2014,448776,Shettleston New Place,Restaurant/Cafe/Canteen,1,679 Old Shettleston Road,Glasgow,G32 7JG,02/10/2013,-4.162993,55.852224\n\
14/02/2014,84956,Shezan Restaurant,Restaurant/Cafe/Canteen,1,1098 Cathcart Road,Glasgow,G42 9XW,26/08/2013,-4.258258,55.826524\n\
14/02/2014,53591,Shilla,Restaurant/Cafe/Canteen,1,1138 Argyle Street,Glasgow,G3 8TD,12/11/2013,-4.284857,55.865138\n\
14/02/2014,125750,Shimla Pinks,Restaurant/Cafe/Canteen,1,769 Pollokshaws Road,Glasgow,G41 2AX,11/07/2013,-4.271722,55.835345\n\
14/02/2014,124859,Shish Mahal Restaurant,Restaurant/Cafe/Canteen,1,68 Park Road,Glasgow,G4 9JF,02/05/2013,-4.279412,55.87313\n\
14/02/2014,444468,Siempre Bicycle Cafe,Restaurant/Cafe/Canteen,1,162 Dumbarton Road,Glasgow,G11 6XE,30/07/2013,-4.29999,55.870769\n\
14/02/2014,27030,Silver Bean Cafe,Restaurant/Cafe/Canteen,1,57 Queen Street,Glasgow,G1 3EN,08/05/2009,-4.252916,55.859202\n\
14/02/2014,112541,Singh\'s Little India,Restaurant/Cafe/Canteen,1,71 Kilmarnock Road,Glasgow,G41 3YR,29/01/2014,-4.282917,55.828531\n\
14/02/2014,618981,Singl-End,Restaurant/Cafe/Canteen,1,263 Renfrew Street,Glasgow,G3 6TT,11/12/2013,-4.268176,55.866588\n\
14/02/2014,133323,Sippa Coffee,Restaurant/Cafe/Canteen,1,222 West George Street,Glasgow,G2 2PQ,22/05/2013,-4.260266,55.863048\n\
14/02/2014,612663,Sisters Cafe,Restaurant/Cafe/Canteen,1,1300 Duke Street,Glasgow,G31 4EB,14/11/2013,-4.199841,55.853449\n\
14/02/2014,406804,Smile Cafe,Restaurant/Cafe/Canteen,1,102 Queen Margaret Drive,Glasgow,G20 8NZ,15/11/2013,-4.284179,55.880546\n\
14/02/2014,606998,Smoak (Within Pivo Pivo),Restaurant/Cafe/Canteen,1,15 Waterloo Street,Glasgow,G2 6AY,07/11/2013,-4.260084,55.860185\n\
14/02/2014,33167,Smug,Restaurant/Cafe/Canteen,1,167 Great George Street,Glasgow,G12 8AQ,11/07/2012,-4.293025,55.875465\n\
14/02/2014,118071,Snack Attack,Restaurant/Cafe/Canteen,1,1057 Maryhill Road,Glasgow,G20 9AX,10/08/2010,-4.283446,55.885754\n\
14/02/2014,26654,Snack Shack,Restaurant/Cafe/Canteen,1,Netherton Road,Glasgow,,06/10/2010,-4.330985,55.898888\n\
14/02/2014,624649,Snuggle Mufin,Restaurant/Cafe/Canteen,1,120 George Street,Glasgow,G1 1RF,05/09/2013,-4.24462,55.861376\n\
14/02/2014,19613,Sodexho (Scottish Executive),Restaurant/Cafe/Canteen,1,450 Argyle Street,Glasgow,G2 8LH,13/10/2006,-4.265955,55.859466\n\
14/02/2014,116172,Sodexo (Scotland)  Thales,Restaurant/Cafe/Canteen,1,1 Linthouse Road,Glasgow,G51 4BZ,10/02/2011,-4.335858,55.866472\n\
14/02/2014,31048,Soho On Miller Street,Restaurant/Cafe/Canteen,1,86 Miller Street,Glasgow,G1 1DT,09/12/2013,-4.250551,55.8592\n\
14/02/2014,26523,Soups U,Restaurant/Cafe/Canteen,1,146 Wellington Street,Glasgow,G2 2XW,23/09/2013,-4.258759,55.864343\n\
14/02/2014,581102,South West Community Cycles,Restaurant/Cafe/Canteen,1,Pollokshaws Road,Glasgow,G43 1AT,14/08/2013,-4.303363,55.823261\n\
14/02/2014,534356,Sparkle Horse,Restaurant/Cafe/Canteen,1,16 Dowanhill Street,Glasgow,G11 5QS,12/08/2013,-4.300353,55.87123\n\
14/02/2014,537376,Spice Fusion,Restaurant/Cafe/Canteen,1,224 Main Street,Glasgow,G69 6AG,08/04/2013,-4.106486,55.851974\n\
14/02/2014,87515,Spice Garden,Restaurant/Cafe/Canteen,1,11 Clyde Place,Glasgow,G5 8AA,03/08/2013,-4.252818,55.845414\n\
14/02/2014,629288,Spice Of Life,Restaurant/Cafe/Canteen,1,61 Kilmarnock Road,Glasgow,G41 3YR,21/01/2014,-4.282917,55.828531\n\
14/02/2014,30369,Spice Of The City,Restaurant/Cafe/Canteen,1,48 Oswald Street,Glasgow,,25/09/2012,-4.25973192,55.85772\n\
14/02/2014,448755,Sporting Solutions,Restaurant/Cafe/Canteen,1,80 Firhill Road,Glasgow,,01/12/2013,-4.27025914,55.88096559\n\
14/02/2014,129520,Springboig Bowling Club,Restaurant/Cafe/Canteen,1,32 Springboig Avenue,Glasgow,G32 0JJ,27/07/2010,-4.151572,55.858626\n\
14/02/2014,76299,Springburn Bowling Club,Restaurant/Cafe/Canteen,1,17 Broomfield Place,Glasgow,G21 3UD,11/06/2010,-4.227831,55.887726\n\
14/02/2014,360866,Springburn Fire Station,Restaurant/Cafe/Canteen,1,1 Midton Street,Glasgow,G21 4AB,26/04/2012,-4.228024,55.876587\n\
14/02/2014,129542,Springburn Parish Church,Restaurant/Cafe/Canteen,1,180 Springburn Way,Glasgow,G21 1TU,13/04/2006,-4.229356,55.882261\n\
14/02/2014,15313,Springcafe,Restaurant/Cafe/Canteen,1,230 Springburn Way,Glasgow,G21 1TS,13/11/2012,-4.228061,55.883381\n\
14/02/2014,129566,Springcroft Sizzling Pub Co,Restaurant/Cafe/Canteen,1,1 Springcroft Drive,Glasgow,G69 6SF,12/03/2012,-4.11988,55.856767\n\
14/02/2014,129598,Springfield Quay Harvester,Restaurant/Cafe/Canteen,1,6 Springfield Quay,Glasgow,G5 8NP,06/02/2013,-4.274804,55.855303\n\
14/02/2014,30881,Spuntini,Restaurant/Cafe/Canteen,1,201 Byres Road,Glasgow,G12 8TN,07/01/2013,-4.29507,55.874348\n\
14/02/2014,22991,Square Yard,Restaurant/Cafe/Canteen,1,29 Stevenson Street,Glasgow,G40 2SS,04/08/2012,-4.237649,55.854654\n\
14/02/2014,92054,St Aloysius Social Club,Restaurant/Cafe/Canteen,1,1615 Cumbernauld Road,Glasgow,G33 1AB,24/02/2009,-4.171623,55.882323\n\
14/02/2014,26256,St Cuthberts Primary School,Restaurant/Cafe/Canteen,1,190 Auckland Street,Glasgow,G22 5NT,20/10/2009,-4.261782,55.882245\n\
14/02/2014,73284,St David\'s Parish Church,Restaurant/Cafe/Canteen,1,66 Boreland Drive,Glasgow,G13 3DG,04/05/2004,-4.354254,55.891026\n\
14/02/2014,35919,St Louis,Restaurant/Cafe/Canteen,1,734 Dumbarton Road,Glasgow,G11 6RD,13/03/2013,-4.322159,55.87127\n\
14/02/2014,36408,St Mirins Out School Club,Restaurant/Cafe/Canteen,1,264 Carmunnock Road,Glasgow,G44 5AP,21/03/2011,-4.247934,55.816387\n\
14/02/2014,84312,St Mungo\'s  Museum Cafe,Restaurant/Cafe/Canteen,1,2 Castle Street,Glasgow,G4 0RH,18/06/2013,-4.23642,55.862469\n\
14/02/2014,111836,St Rollox Bowling Club,Restaurant/Cafe/Canteen,1,9 Kennyhill Square,Glasgow,G31 3LL,27/08/2013,-4.207763,55.863256\n\
14/02/2014,129940,St Vincent Bowling Club,Restaurant/Cafe/Canteen,1,37 St Vincent Crescent,Glasgow,G3 8NG,23/07/2013,-4.286874,55.864372\n\
14/02/2014,123489,Star Refrigeration,Restaurant/Cafe/Canteen,1,1501 Nitshill Road,Glasgow,G46 8JW,17/01/2013,-4.32806,55.802124\n\
14/02/2014,128339,Starbucks,Restaurant/Cafe/Canteen,1,27 Sauchiehall Street,Glasgow,G1 2RX,23/09/2013,-4.254527,55.864124\n\
14/02/2014,15081,Starbucks,Restaurant/Cafe/Canteen,1,140 Buchanan Street,Glasgow,G1 2JR,15/09/2010,-4.25348,55.861501\n\
14/02/2014,79750,Starbucks Coffee,Restaurant/Cafe/Canteen,1,254 Byres Road,Glasgow,G12 8SH,07/06/2010,-4.293324,55.87537\n\
14/02/2014,98562,Starbucks Coffee,Restaurant/Cafe/Canteen,1,9 Exchange Place,Glasgow,G1 3AN,15/09/2010,-4.253746,55.860022\n\
14/02/2014,31176,Starbucks Coffee,Restaurant/Cafe/Canteen,1,38 George Square,Glasgow,,29/10/2013,-4.250945,55.860849\n\
14/02/2014,104182,Starbucks Coffee,Restaurant/Cafe/Canteen,1,79 Gordon Street,Glasgow,G1 3SQ,12/02/2010,-4.258211,55.859302\n\
14/02/2014,23284,Starbucks Coffee,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,08/07/2010,-4.342073,55.822898\n\
14/02/2014,25665,Starbucks Coffee Company,Restaurant/Cafe/Canteen,1,60 West Nile Street,Glasgow,G1 2NP,06/09/2013,-4.254735,55.861649\n\
14/02/2014,23282,Starbucks Coffee Company,Restaurant/Cafe/Canteen,1,220 Buchanan Street,Glasgow,,05/08/2013,,\n\
14/02/2014,73458,Starbucks Coffee Company,Restaurant/Cafe/Canteen,1,33 Bothwell Street,Glasgow,G2 6NL,14/03/2011,-4.259995,55.86086\n\
14/02/2014,581128,Steam Punk Cafe,Restaurant/Cafe/Canteen,1,18 Renfield Street,Glasgow,G2 5AA,28/08/2013,-4.256092,55.861067\n\
14/02/2014,34270,Stereo,Restaurant/Cafe/Canteen,1,28 Renfield Lane,Glasgow,,28/10/2013,-4.25662816,55.86155176\n\
14/02/2014,511137,Stewarts Cafe,Restaurant/Cafe/Canteen,1,24 St Andrews Street,Glasgow,G1 5PD,03/07/2013,-4.24419,55.855308\n\
14/02/2014,72481,Sticky Fingers,Restaurant/Cafe/Canteen,1,130 Blochairn Road,Glasgow,G21 2DU,06/03/2012,-4.213723,55.869143\n\
14/02/2014,618969,Stirung\'s Pantry,Restaurant/Cafe/Canteen,1,352 Duke Street,Glasgow,G31 1RB,09/12/2013,-4.220115,55.858189\n\
14/02/2014,68978,Stonedyke Neighbourhood Centre.,Restaurant/Cafe/Canteen,1,9 Belsyde Avenue,Glasgow,G15 6AW,13/11/2013,-4.36046,55.906824\n\
14/02/2014,125699,Strahclyde Police Headquarters,Restaurant/Cafe/Canteen,1,173 Pitt Street,Glasgow,G2 4DR,24/02/2010,-4.259844,55.861438\n\
14/02/2014,495617,Strata,Restaurant/Cafe/Canteen,1,45 Queen Street,Glasgow,G1 3EF,15/01/2013,-4.252808,55.858718\n\
14/02/2014,187365,Strathclyde Business School,Restaurant/Cafe/Canteen,1,199 Cathedral Street,Glasgow,G4 0QU,24/06/2013,-4.243053,55.862474\n\
14/02/2014,117614,Strathclyde Fire Brigade Training Centre,Restaurant/Cafe/Canteen,1,90 Maitland Street,Glasgow,G4 0HX,26/05/2010,-4.256609,55.868059\n\
14/02/2014,102407,Stravaigin,Restaurant/Cafe/Canteen,1,30 Gibson Street,Glasgow,G12 8NX,17/11/2013,-4.282193,55.872575\n\
14/02/2014,35876,Street Cafe,Restaurant/Cafe/Canteen,1,928 Shettleston Road,Glasgow,G32 7XW,09/01/2014,-4.172644,55.851668\n\
14/02/2014,26697,Style Restaurant,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,28/06/2012,-4.342073,55.822898\n\
14/02/2014,30953,Subway,Restaurant/Cafe/Canteen,1,115 Crow Road,Glasgow,G11 7SH,01/03/2011,-4.313904,55.872513\n\
14/02/2014,22616,Subway Sandwiches,Restaurant/Cafe/Canteen,1,337 Victoria Road,Glasgow,G42 7SA,22/11/2011,-4.263854,55.838186\n\
14/02/2014,581079,Sugar Rush,Restaurant/Cafe/Canteen,1,32 St Andrews Road,Glasgow,G41 1PF,03/10/2013,-4.272107,55.845772\n\
14/02/2014,121588,Sun City,Restaurant/Cafe/Canteen,1,836 Mosspark Drive,Glasgow,,13/11/2013,-4.34387598,55.84143677\n\
14/02/2014,112552,Sun Hei,Restaurant/Cafe/Canteen,1,526 Kilmarnock Road,Glasgow,G43 2BL,22/11/2011,-4.291852,55.8135\n\
14/02/2014,581130,Surface + Cafe,Restaurant/Cafe/Canteen,1,91 Great Western Road,Glasgow,G4 9AH,03/10/2013,-4.27098,55.871632\n\
14/02/2014,48908,Swallow Cafe,Restaurant/Cafe/Canteen,1,582 Alexandra Parade,Glasgow,G31 3BP,24/09/2013,-4.214822,55.863174\n\
14/02/2014,406805,Sweet and Spice,Restaurant/Cafe/Canteen,1,2 Inverlochy Crescent,Glasgow,G33 5ES,14/06/2012,-4.161188,55.877654\n\
14/02/2014,618973,Sweet Dreams,Restaurant/Cafe/Canteen,1,14 Forfar Avenue,Glasgow,G52 3JQ,09/12/2013,-4.3539,55.845285\n\
14/02/2014,460434,Sweet Everythings,Restaurant/Cafe/Canteen,1,8 Summerfield Cottages,Glasgow,G14 0RB,18/10/2012,-4.33371,55.872759\n\
14/02/2014,132210,T J Hughes Restaurant/cafe,Restaurant/Cafe/Canteen,1,125 Trongate,Glasgow,G1 5HF,24/11/2011,-4.248149,55.857177\n\
14/02/2014,78066,T.G.I. Friday,Restaurant/Cafe/Canteen,1,113 Buchanan Street,Glasgow,G1 3HF,23/06/2011,-4.254819,55.860066\n\
14/02/2014,444476,Taco Mazama,Restaurant/Cafe/Canteen,1,263 Byres Road,Glasgow,G12 8TL,16/01/2013,-4.293342,55.875953\n\
14/02/2014,95890,Talbot Association,Restaurant/Cafe/Canteen,1,109 Dunblane Street,Glasgow,G4 0HJ,09/05/2013,-4.255481,55.867612\n\
14/02/2014,23231,Talbot Association,Restaurant/Cafe/Canteen,1,494 Great Western Road,Glasgow,,07/07/2010,-4.28216681,55.87553859\n\
14/02/2014,26798,Tapa Coffee House,Restaurant/Cafe/Canteen,1,721 Pollokshaws Road,Glasgow,G41 2AA,29/09/2011,-4.270716,55.835902\n\
14/02/2014,36306,Taste Outside Catering Ltd,Restaurant/Cafe/Canteen,1,37 Edgemont Street,Glasgow,G41 3EJ,12/01/2011,-4.277923,55.827788\n\
14/02/2014,124434,Tchai Ovna,Restaurant/Cafe/Canteen,1,32 Otago Lane,Glasgow,G12 8PB,10/11/2011,-4.282075,55.872748\n\
14/02/2014,315961,Tea Room At The Botanics,Restaurant/Cafe/Canteen,1,730 Great Western Road,Glasgow,G12 0UE,01/07/2012,-4.289875,55.878157\n\
14/02/2014,19528,Teapots,Restaurant/Cafe/Canteen,1,1 Northinch Court,Glasgow,G14 9UP,20/05/2010,-4.337638,55.874014\n\
14/02/2014,46197,Tesco Customer Cafe,Restaurant/Cafe/Canteen,1,1201 Maryhill Road,Glasgow,G20 9SH,27/01/2011,-4.286288,55.887041\n\
14/02/2014,562679,TGI Fridays,Restaurant/Cafe/Canteen,1,50 Provan Walk,Glasgow,G34 9DL,18/11/2013,-4.136909,55.872982\n\
14/02/2014,123253,Thai Fountain,Restaurant/Cafe/Canteen,1,27 Newton Place,Glasgow,G3 7PY,21/09/2010,-4.273338,55.866582\n\
14/02/2014,200651,Thai Lemongrass,Restaurant/Cafe/Canteen,1,24 Renfrew Street,Glasgow,G2 3BW,26/08/2013,-4.254791,55.865369\n\
14/02/2014,188124,Thai Orchid,Restaurant/Cafe/Canteen,1,336 Argyle Street,Glasgow,G2 8LY,22/10/2013,-4.261711,55.859031\n\
14/02/2014,53593,Thai Siam Restaurant,Restaurant/Cafe/Canteen,1,1191 Argyle Street,Glasgow,G3 8TQ,27/05/2012,-4.287011,55.865358\n\
14/02/2014,433012,Thairiffic,Restaurant/Cafe/Canteen,1,303 Sauchiehall Street,Glasgow,G2 3HQ,15/08/2013,-4.263947,55.865326\n\
14/02/2014,27018,The Albany Cafe,Restaurant/Cafe/Canteen,1,44 Ashley Street,Glasgow,G3 6DS,01/08/2012,-4.272108,55.869876\n\
14/02/2014,594161,The Amarillo Cafe,Restaurant/Cafe/Canteen,1,18 Craigbank Drive,Glasgow,G53 6RA,21/10/2013,-4.362041,55.816233\n\
14/02/2014,315991,The Annexe Caf�,Restaurant/Cafe/Canteen,1,9 Stewartville Street,Glasgow,G11 5PE,05/04/2012,-4.304804,55.871093\n\
14/02/2014,624672,The Arc Cafe,Restaurant/Cafe/Canteen,1,340 Ashgill Road,Glasgow,G22 7HW,14/01/2014,-4.240541,55.893769\n\
14/02/2014,53576,The Arches,Restaurant/Cafe/Canteen,1,253 Argyle Street,Glasgow,G2 8DL,07/06/2010,-4.258365,55.858383\n\
14/02/2014,585885,The Ark Cafe,Restaurant/Cafe/Canteen,1,40 George Street,Glasgow,G1 1QE,05/09/2013,-4.241682,55.860863\n\
14/02/2014,110733,The Ark Cafe,Restaurant/Cafe/Canteen,1,90 John Street,Glasgow,G1 1JH,08/08/2013,-4.246721,55.861517\n\
14/02/2014,30638,The Asmaan Restaurant,Restaurant/Cafe/Canteen,1,22 Bath Street,Glasgow,G2 1HB,06/11/2013,-4.253975,55.863703\n\
14/02/2014,97821,The Baby Grand,Restaurant/Cafe/Canteen,1,3 Elmbank Gardens,Glasgow,G2 4NQ,15/01/2014,-4.270439,55.865108\n\
14/02/2014,21628,The Bank,Restaurant/Cafe/Canteen,1,443 Clarkston Road,Glasgow,G44 3LL,02/09/2013,-4.270326,55.810583\n\
14/02/2014,26676,The Bay Tree Cafe,Restaurant/Cafe/Canteen,1,403 Great Western Road,Glasgow,G4 9HY,28/01/2014,-4.277598,55.873819\n\
14/02/2014,48698,The Bean Bank,Restaurant/Cafe/Canteen,1,102 Main Street,Glasgow,G69 6AE,13/11/2013,-4.109489,55.850484\n\
14/02/2014,406814,The Bellahouston Bowling  Club,Restaurant/Cafe/Canteen,1,2 Dumbreck Road,Glasgow,G41 5BW,30/04/2013,-4.313765,55.847332\n\
14/02/2014,35623,The Big Mouth Coffee Company,Restaurant/Cafe/Canteen,1,167 Dumbarton Road,Glasgow,G11 6AA,14/05/2010,-4.301502,55.870669\n\
14/02/2014,562695,The Blue Chair,Restaurant/Cafe/Canteen,1,85 High Street,Glasgow,G1 1NB,27/06/2013,-4.242655,55.858068\n\
14/02/2014,10451,The Bothy,Restaurant/Cafe/Canteen,1,11 Ruthven Lane,Glasgow,G12 9BG,16/07/2013,-4.295154,55.875506\n\
14/02/2014,448782,The Bridge Cafe,Restaurant/Cafe/Canteen,1,1000 Westerhouse Road,Glasgow,G34 9JW,10/09/2012,-4.118571,55.867646\n\
14/02/2014,120103,The Brooklyn Cafe,Restaurant/Cafe/Canteen,1,21 Minard Road,Glasgow,G41 2HR,07/02/2013,-4.279491,55.83166\n\
14/02/2014,36104,The Butchers Shop,Restaurant/Cafe/Canteen,1,1055 Sauchiehall Street,Glasgow,G3 7UD,08/03/2013,-4.289369,55.86686\n\
14/02/2014,26885,The Butney Bite,Restaurant/Cafe/Canteen,1,1907 Maryhill Road,Glasgow,G20 0BY,16/06/2011,-4.299217,55.896093\n\
14/02/2014,624655,The Butterfly And The Pig,Restaurant/Cafe/Canteen,1,2 Partick Bridge Street,Glasgow,G11 6PL,27/12/2013,-4.299887,55.869846\n\
14/02/2014,31197,The Cake Tin,Restaurant/Cafe/Canteen,1,47 Langbar Crescent,Glasgow,G33 4JN,28/01/2010,-4.138716,55.861366\n\
14/02/2014,48573,The Calabash,Restaurant/Cafe/Canteen,1,57 Union Street,Glasgow,G1 3RB,12/07/2013,-4.257325,55.859184\n\
14/02/2014,36462,The Cherry Apron,Restaurant/Cafe/Canteen,1,11 Forfar Avenue,Glasgow,G52 3JQ,13/12/2011,-4.3539,55.845285\n\
14/02/2014,534352,The Chinese Kitchen,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,18/03/2013,-4.258023,55.865157\n\
14/02/2014,200647,The Chip Shop,Restaurant/Cafe/Canteen,1,1 Scottish Exhibition Centre,Glasgow,G3 8YW,02/02/2012,-4.288154,55.86087\n\
14/02/2014,48825,The Chocolate Emporium,Restaurant/Cafe/Canteen,1,53 Byres Road,Glasgow,G11 5RG,14/06/2011,-4.298699,55.871387\n\
14/02/2014,26318,The Church On The Hill,Restaurant/Cafe/Canteen,1,16 Algie Street,Glasgow,G41 3DJ,07/10/2013,-4.272069,55.827339\n\
14/02/2014,49076,The Climbing Academy,Restaurant/Cafe/Canteen,1,124 Portman Street,Glasgow,G41 1EJ,30/10/2013,-4.281288,55.851435\n\
14/02/2014,581120,The Clock Tower,Restaurant/Cafe/Canteen,1,88 Castle Street,Glasgow,,27/08/2013,,\n\
14/02/2014,124659,The Copper Pot,Restaurant/Cafe/Canteen,1,424 Paisley Road West,Glasgow,G51 1BE,19/06/2012,-4.297558,55.851788\n\
14/02/2014,109657,The Corinthian,Restaurant/Cafe/Canteen,1,191 Ingram Street,Glasgow,G1 1DQ,30/06/2011,-4.250462,55.859606\n\
14/02/2014,21939,The Costa Coffee,Restaurant/Cafe/Canteen,1,471 Great Western Road,Glasgow,G12 8HL,18/08/2010,-4.282144,55.875281\n\
14/02/2014,82805,The Dhabba,Restaurant/Cafe/Canteen,1,44 Candleriggs,Glasgow,G1 1LD,29/05/2013,-4.245418,55.857757\n\
14/02/2014,48049,The Doocot,Restaurant/Cafe/Canteen,1,11 Mitchell Lane,Glasgow,G1 3NU,18/03/2011,-4.255247,55.859995\n\
14/02/2014,534332,The Factory Cafe (co Wasp Factory Art Sudio),Restaurant/Cafe/Canteen,1,77 Hanson Street,Glasgow,G31 2HF,19/03/2013,-4.226391,55.864547\n\
14/02/2014,18059,The Ferry,Restaurant/Cafe/Canteen,1,Anderston Quay,Glasgow,,16/06/2010,-4.272767,55.856774\n\
14/02/2014,581118,The Fish People Cafe,Restaurant/Cafe/Canteen,1,350 Scotland Street,Glasgow,G5 8QF,12/09/2013,-4.275392,55.850052\n\
14/02/2014,551906,The Flying Haggis,Restaurant/Cafe/Canteen,1,176 Saracen Street,Glasgow,G22 5EP,26/11/2013,-4.253988,55.882666\n\
14/02/2014,134273,The Food Gallery,Restaurant/Cafe/Canteen,1,27 Woodside Place,Glasgow,G3 7QL,18/11/2010,-4.275036,55.866928\n\
14/02/2014,466605,The Gallery,Restaurant/Cafe/Canteen,1,101 Brunswick Street,Glasgow,G1 1TB,23/09/2013,,\n\
14/02/2014,444487,The Gannet,Restaurant/Cafe/Canteen,1,1155 Argyle Street,Glasgow,G3 8TB,26/11/2013,-4.285222,55.864816\n\
14/02/2014,433001,The Glad Cafe C.I.C.,Restaurant/Cafe/Canteen,1,1006 Pollokshaws Road,Glasgow,G41 2HG,08/07/2013,-4.278617,55.832008\n\
14/02/2014,107063,The Glasgow Academicals Club,Restaurant/Cafe/Canteen,1,45 Helensburgh Drive,Glasgow,G13 1RR,16/05/2013,-4.330996,55.889356\n\
14/02/2014,65859,The Glasgow Art Club,Restaurant/Cafe/Canteen,1,185 Bath Street,Glasgow,G2 4HU,26/06/2012,-4.262598,55.86439\n\
14/02/2014,27014,The Glasgow Curry Shop,Restaurant/Cafe/Canteen,1,21 Ashton Lane,Glasgow,G12 8SJ,17/10/2013,-4.292992,55.87463\n\
14/02/2014,607017,The Glasgow Tearooms,Restaurant/Cafe/Canteen,1,89 Glassford Street,Glasgow,G1 1UH,21/01/2014,-4.249165,55.859558\n\
14/02/2014,114758,The Glasshouse Cafe,Restaurant/Cafe/Canteen,1,Langside Road,Glasgow,,28/04/2011,-4.263164,55.831223\n\
14/02/2014,188098,The Globe Cafe,Restaurant/Cafe/Canteen,1,205 Paisley Road West,Glasgow,G51 1NE,20/12/2011,-4.288156,55.852206\n\
14/02/2014,31280,The Greater Maryhill Outreach Project,Restaurant/Cafe/Canteen,1,15 Shakespeare Street,Glasgow,G20 8TH,20/11/2013,-4.285368,55.886069\n\
14/02/2014,129063,The Greek Golden Kebab Rest.,Restaurant/Cafe/Canteen,1,34 Sinclair Drive,Glasgow,G42 9QE,26/11/2013,-4.267575,55.82638\n\
14/02/2014,107798,The Green Baize Club,Restaurant/Cafe/Canteen,1,70 Hillington Road South,Glasgow,G52 2AA,08/06/2010,-4.358496,55.846527\n\
14/02/2014,22598,The Grill On The Corner,Restaurant/Cafe/Canteen,1,23 Bothwell Street,Glasgow,G2 6NL,04/11/2013,-4.259995,55.86086\n\
14/02/2014,118061,The Grove,Restaurant/Cafe/Canteen,1,275 Maryhill Road,Glasgow,G20 7YA,05/03/2013,-4.271257,55.875833\n\
14/02/2014,127890,The Hanoi Bike Shop,Restaurant/Cafe/Canteen,1,8 Ruthven Lane,Glasgow,G12 9BG,14/10/2013,-4.295154,55.875506\n\
14/02/2014,36268,The Hidden Lane Tea Room,Restaurant/Cafe/Canteen,1,1103 Argyle Street,Glasgow,,14/05/2012,,\n\
14/02/2014,49054,The Highlander Cafe,Restaurant/Cafe/Canteen,1,204 Liddesdale Road,Glasgow,G22 7QR,18/09/2013,-4.255681,55.89697\n\
14/02/2014,594130,The Hill,Restaurant/Cafe/Canteen,1,94 Byres Road,Glasgow,G12 8TB,30/01/2014,-4.295826,55.873085\n\
14/02/2014,25891,The Hub,Restaurant/Cafe/Canteen,1,57 Queen Street,Glasgow,G1 3EN,20/12/2011,-4.252916,55.859202\n\
14/02/2014,29743,The Hyndland Cafe,Restaurant/Cafe/Canteen,1,96 Clarence Drive,Glasgow,G12 9RN,06/11/2013,-4.312321,55.877881\n\
14/02/2014,22687,The Italian Caffee Enoteca,Restaurant/Cafe/Canteen,1,92 Albion Street,Glasgow,G1 1NY,04/07/2012,-4.243579,55.858573\n\
14/02/2014,53600,The Kelvin Hall,Restaurant/Cafe/Canteen,1,1431 Argyle Street,Glasgow,G3 8AW,09/11/2010,-4.294133,55.868497\n\
14/02/2014,21467,The Left Bank,Restaurant/Cafe/Canteen,1,35 Gibson Street,Glasgow,G12 8NU,10/11/2013,-4.282448,55.8723\n\
14/02/2014,104683,The Lemon Tree,Restaurant/Cafe/Canteen,1,119 Great Western Road,Glasgow,G4 9AH,11/03/2013,-4.27098,55.871632\n\
14/02/2014,360761,The Leven Valley,Restaurant/Cafe/Canteen,1,7 Allerdyce Court,Glasgow,,27/04/2012,-4.376204,55.902954\n\
14/02/2014,10863,The Lighthouse,Restaurant/Cafe/Canteen,1,51 Nether Auldhouse Road,Glasgow,G43 2XG,06/10/2006,-4.291634,55.817117\n\
14/02/2014,48569,The Little Cafe,Restaurant/Cafe/Canteen,1,1361 Argyle Street,Glasgow,,04/09/2012,-4.29112643,55.86758137\n\
14/02/2014,49170,The London Road Cafe,Restaurant/Cafe/Canteen,1,239 London Road,Glasgow,G40 1PE,15/11/2011,-4.237417,55.853948\n\
14/02/2014,607031,The Looking Glass Tearoom And Bakery,Restaurant/Cafe/Canteen,1,1067 Cathcart Road,Glasgow,G42 9AF,05/11/2013,-4.258136,55.826895\n\
14/02/2014,123561,The Lunch Box,Restaurant/Cafe/Canteen,1,132 Norfolk Street,Glasgow,G5 9EQ,07/11/2013,-4.258249,55.852804\n\
14/02/2014,534345,The Manchurian,Restaurant/Cafe/Canteen,1,494 Dumbarton Road,Glasgow,G11 6SL,06/06/2013,-4.313494,55.870984\n\
14/02/2014,607037,The Melting Pot,Restaurant/Cafe/Canteen,1,1206 Shettleston Road,Glasgow,G32 7PG,07/11/2013,-4.165839,55.851401\n\
14/02/2014,571735,The Mews Coffee Shop,Restaurant/Cafe/Canteen,1,99 Woodside Place Lane,Glasgow,G3 7RB,11/07/2013,-4.273869,55.866644\n\
14/02/2014,22637,The Monkey Bar,Restaurant/Cafe/Canteen,1,100 Bath Street,Glasgow,G2 2EN,15/01/2014,-4.258163,55.864264\n\
14/02/2014,581076,The New York Kitchen,Restaurant/Cafe/Canteen,1,562 Dumbarton Road,Glasgow,G11 6RH,28/08/2013,-4.31597,55.870955\n\
14/02/2014,124703,The Night Palace Restaurant,Restaurant/Cafe/Canteen,1,2377 Paisley Road West,Glasgow,G52 3QH,01/09/2013,-4.365789,55.845093\n\
14/02/2014,427407,The Officers Mess,Restaurant/Cafe/Canteen,1,21 Buchanan Street,Glasgow,G1 3HL,28/06/2012,-4.254903,55.859309\n\
14/02/2014,31289,The Olive Pip,Restaurant/Cafe/Canteen,1,231 Crow Road,Glasgow,G11 7PZ,14/05/2012,-4.319648,55.875541\n\
14/02/2014,30663,The Pantry,Restaurant/Cafe/Canteen,1,163 London Road,Glasgow,G1 5BX,30/09/2011,-4.239421,55.854622\n\
14/02/2014,35733,The Phoenix Cafeteria,Restaurant/Cafe/Canteen,1,358 Netherton Road,Glasgow,G13 1AX,25/05/2010,-4.333117,55.897791\n\
14/02/2014,91376,The Pines,Restaurant/Cafe/Canteen,1,210 Crookston Road,Glasgow,G52 3NF,16/09/2013,-4.365228,55.840331\n\
14/02/2014,19320,The Pipeworks Men\'s Health And Leisure Club,Restaurant/Cafe/Canteen,1,10 Metropole Lane,Glasgow,G1 4NH,24/09/2009,-4.251256,55.855368\n\
14/02/2014,581082,The Plum Tree,Restaurant/Cafe/Canteen,1,6 Wilson Street,Glasgow,G1 1SS,21/08/2013,-4.24667,55.858687\n\
14/02/2014,41156,The Preshal Trust,Restaurant/Cafe/Canteen,1,8 Aboukir Street,Glasgow,G51 4QY,15/02/2011,-4.327698,55.864469\n\
14/02/2014,125744,The Prince and Princess Of Wales Hospice Shop,Restaurant/Cafe/Canteen,1,689 Pollokshaws Road,Glasgow,G41 2AB,03/03/2010,-4.26962,55.836552\n\
14/02/2014,111603,The Pyramid Cafe,Restaurant/Cafe/Canteen,1,25 Kempsthorn Road,Glasgow,G53 5SR,13/06/2011,-4.355505,55.831153\n\
14/02/2014,48271,The Really Delicious Food Company,Restaurant/Cafe/Canteen,1,21 Watt Street,Glasgow,G5 8RR,15/02/2013,-4.27499,55.853008\n\
14/02/2014,624673,The Really Delicious Food Company (GTG),Restaurant/Cafe/Canteen,1,1330 South Street,Glasgow,G14 0BJ,16/01/2014,-4.356358,55.879292\n\
14/02/2014,594163,The Richmond,Restaurant/Cafe/Canteen,1,144 Park Road,Glasgow,G4 9HB,06/01/2014,-4.280217,55.872683\n\
14/02/2014,460435,The Rio Cafe,Restaurant/Cafe/Canteen,1,27 Hyndland Street,Glasgow,G11 5QF,16/05/2013,-4.302704,55.871788\n\
14/02/2014,98563,The Rogano,Restaurant/Cafe/Canteen,1,11 Exchange Place,Glasgow,G1 3AN,11/03/2013,-4.253746,55.860022\n\
14/02/2014,360753,The Royal And Ancient Order Of Buffalo\'s,Restaurant/Cafe/Canteen,1,937 Dumbarton Road,Glasgow,,27/04/2012,-4.43745953,55.91450303\n\
14/02/2014,128350,The Savoy Nightclub,Restaurant/Cafe/Canteen,1,140 Sauchiehall Street,Glasgow,G2 3DH,19/04/2009,-4.258023,55.865157\n\
14/02/2014,114726,The Shed,Restaurant/Cafe/Canteen,1,26 Langside Avenue,Glasgow,G41 2QS,06/09/2011,-4.278364,55.830962\n\
14/02/2014,22218,The Sisters Kelvingrove,Restaurant/Cafe/Canteen,1,36 Kelvingrove Street,Glasgow,G3 7RZ,16/05/2012,-4.283588,55.865844\n\
14/02/2014,9739,The Sisters Restaurant,Restaurant/Cafe/Canteen,1,1 Ashwood Gardens,Glasgow,G13 1NU,16/10/2012,-4.325679,55.883894\n\
14/02/2014,507921,The Space,Restaurant/Cafe/Canteen,1,168 Allison Street,Glasgow,G42 8RR,06/02/2013,-4.26311,55.836106\n\
14/02/2014,26306,The Spoon Cafe,Restaurant/Cafe/Canteen,1,46 Trongate,Glasgow,G1 5ES,16/10/2013,-4.24454,55.857225\n\
14/02/2014,134214,The Stand Comedy Club,Restaurant/Cafe/Canteen,1,333 Woodlands Road,Glasgow,G3 6NG,30/09/2010,-4.279043,55.872561\n\
14/02/2014,83819,The Station Diner,Restaurant/Cafe/Canteen,1,67 Carntynehall Road,Glasgow,G32 6AA,22/08/2013,-4.179543,55.854475\n\
14/02/2014,124627,The Talbot Association,Restaurant/Cafe/Canteen,1,344 Paisley Road,Glasgow,G5 8RE,29/04/2013,-4.277841,55.853961\n\
14/02/2014,101622,The Tea Garden,Restaurant/Cafe/Canteen,1,9 Gardner Street,Glasgow,G11 5NR,12/02/2013,-4.306124,55.871239\n\
14/02/2014,460400,The Tramway,Restaurant/Cafe/Canteen,1,25 Albert Drive,Glasgow,G41 2PE,21/10/2013,-4.267113,55.840678\n\
14/02/2014,315911,The Urban Food Theatre,Restaurant/Cafe/Canteen,1,89 Causewayside Street,Glasgow,G32 8LT,23/03/2012,-4.16974,55.84257\n\
14/02/2014,31337,The Viper,Restaurant/Cafe/Canteen,1,3 Belmont Lane,Glasgow,G12 8EN,21/11/2009,-4.282402,55.875869\n\
14/02/2014,10190,The Way To Go Cafe,Restaurant/Cafe/Canteen,1,17 Waddell Court,Glasgow,G5 0QA,28/10/2011,-4.241955,55.849516\n\
14/02/2014,629290,The Wee Curry Shop,Restaurant/Cafe/Canteen,1,41 Byres Road,Glasgow,G11 5RG,22/01/2014,-4.298699,55.871387\n\
14/02/2014,95734,The Welcome. Place Cafe,Restaurant/Cafe/Canteen,1,2494 Dumbarton Road,Glasgow,G13 4EJ,23/01/2013,-4.382072,55.89085\n\
14/02/2014,556117,The West Diner (at West Of Scotland Cricket Club),Restaurant/Cafe/Canteen,1,44 Peel Street,Glasgow,G11 5LU,17/06/2013,-4.310611,55.872233\n\
14/02/2014,90429,The Western Baths Club,Restaurant/Cafe/Canteen,1,12 Cranworth Street,Glasgow,G12 8BZ,05/11/2009,-4.290285,55.876442\n\
14/02/2014,127765,The Western Club,Restaurant/Cafe/Canteen,1,32 Royal Exchange Square,Glasgow,G1 3AB,06/07/2012,-4.252561,55.86052\n\
14/02/2014,128357,The Willow Tearoom,Restaurant/Cafe/Canteen,1,217 Sauchiehall Street,Glasgow,G2 3EX,21/09/2010,-4.26132,55.864961\n\
14/02/2014,36305,The Yarn Cake Ltd,Restaurant/Cafe/Canteen,1,148 Queen Margaret Drive,Glasgow,G20 8NY,29/10/2010,-4.283533,55.88098\n\
14/02/2014,448743,Theatre Royal,Restaurant/Cafe/Canteen,1,286 Hope Street,Glasgow,G2 3PP,29/05/2012,-4.259844,55.861438\n\
14/02/2014,188094,Thomas Fortune Centre,Restaurant/Cafe/Canteen,1,195 Drumry Road East,Glasgow,G15 8NS,15/12/2011,-4.37504,55.908467\n\
14/02/2014,19544,Thorntons,Restaurant/Cafe/Canteen,1,325 Provan Walk,Glasgow,G34 9DY,10/05/2012,-4.138074,55.871218\n\
14/02/2014,48878,Tibo,Restaurant/Cafe/Canteen,1,443 Duke Street,Glasgow,G31 2LD,27/07/2012,-4.221018,55.858883\n\
14/02/2014,30879,Tickled Trout,Restaurant/Cafe/Canteen,1,878 Boclair Road,Glasgow,G62 6EP,11/06/2009,-4.286158,55.926417\n\
14/02/2014,31201,Tiffany\'s,Restaurant/Cafe/Canteen,1,33 Glassford Street,Glasgow,G1 1UG,04/10/2012,-4.249347,55.858566\n\
14/02/2014,48120,Tiki Bar And Kitsch Inn,Restaurant/Cafe/Canteen,1,214 Bath Street,Glasgow,,26/11/2012,-4.26368412,55.86469403\n\
14/02/2014,22038,Tinderbox,Restaurant/Cafe/Canteen,1,116 Ingram Street,Glasgow,G1 1EJ,21/02/2012,-4.246591,55.859812\n\
14/02/2014,79744,Tinderbox,Restaurant/Cafe/Canteen,1,189 Byres Road,Glasgow,G12 8TN,25/11/2009,-4.29507,55.874348\n\
14/02/2014,34619,Tinderbox,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,G1 3JN,25/09/2013,-4.253456,55.859156\n\
14/02/2014,360852,Tinto Tapas Bar,Restaurant/Cafe/Canteen,1,138 Battlefield Road,Glasgow,G42 9JT,03/12/2013,-4.265146,55.826083\n\
14/02/2014,103374,Titwood Bowling Club,Restaurant/Cafe/Canteen,1,77 Glencairn Drive,Glasgow,G41 4PN,07/06/2010,-4.286549,55.837721\n\
14/02/2014,130305,Tivoli Restaurant,Restaurant/Cafe/Canteen,1,39 Stockwell Street,Glasgow,G1 4RZ,29/07/2013,-4.249198,55.856816\n\
14/02/2014,85216,Tollcross Bowling Club,Restaurant/Cafe/Canteen,1,153 Causewayside Street,Glasgow,G32 8LP,03/12/2009,-4.171721,55.838562\n\
14/02/2014,556109,Tollcross International Swimming Centre Cafe,Restaurant/Cafe/Canteen,1,360 Wellshot Road,Glasgow,G32 7QR,12/06/2013,-4.177626,55.845333\n\
14/02/2014,133290,Tollcross Leisure Centre Cafe,Restaurant/Cafe/Canteen,1,360 Wellshot Road,Glasgow,G32 7QR,06/06/2011,-4.177626,55.845333\n\
14/02/2014,35816,Tollcross Tea Room,Restaurant/Cafe/Canteen,1,933 Tollcross Road,Glasgow,G32 8UR,01/10/2010,-4.175393,55.844249\n\
14/02/2014,31110,Toni Macaroni,Restaurant/Cafe/Canteen,1,10 Byres Road,Glasgow,G11 5JY,24/10/2013,-4.298849,55.870674\n\
14/02/2014,200624,Tony Macaroni,Restaurant/Cafe/Canteen,1,17 John Street,Glasgow,,18/09/2013,-4.24776116,55.86029304\n\
14/02/2014,562666,Tony Macaroni,Restaurant/Cafe/Canteen,1,133 West George Street,Glasgow,G2 2JJ,18/06/2013,-4.257551,55.862244\n\
14/02/2014,480309,Tony Macaroni Too,Restaurant/Cafe/Canteen,1,142 Dumbarton Road,Glasgow,G11 6XE,08/11/2013,-4.29999,55.870769\n\
14/02/2014,315937,Torres Restaurant,Restaurant/Cafe/Canteen,1,327 Sauchiehall Street,Glasgow,G2 3HW,16/07/2013,-4.265169,55.865457\n\
14/02/2014,25649,Touch Base Cafe,Restaurant/Cafe/Canteen,1,43 Middlesex Street,Glasgow,G41 1EA,30/10/2013,-4.283351,55.852277\n\
14/02/2014,562674,Townhead Village Hall,Restaurant/Cafe/Canteen,1,60 St Mungo Avenue,Glasgow,G4 0PL,12/11/2013,-4.240224,55.865239\n\
14/02/2014,67437,Tradeston Ex-servicemen\'s Club,Restaurant/Cafe/Canteen,1,6 Beech Avenue,Glasgow,G41 5BY,22/06/2010,-4.305644,55.847512\n\
14/02/2014,22925,Trans Euro Cafe,Restaurant/Cafe/Canteen,1,25 Parnie Street,Glasgow,G1 5RJ,25/09/2013,-4.245404,55.85614\n\
14/02/2014,112826,Trattoria Gia,Restaurant/Cafe/Canteen,1,17 King Street,Glasgow,G1 5QZ,27/05/2010,-4.246222,55.856745\n\
14/02/2014,95674,Tribeca,Restaurant/Cafe/Canteen,1,102 Dumbarton Road,Glasgow,G11 6NX,20/09/2012,-4.297868,55.870297\n\
14/02/2014,125012,Tron Cafe/Bar,Restaurant/Cafe/Canteen,1,38 Parnie Street,Glasgow,G1 5LS,23/03/2012,-4.246245,55.856592\n\
14/02/2014,48740,Tropeiro,Restaurant/Cafe/Canteen,1,363 Argyle Street,Glasgow,G2 8LT,23/01/2013,-4.263572,55.85862\n\
14/02/2014,35252,Truly Scrumptious,Restaurant/Cafe/Canteen,1,120 Govan Road,Glasgow,G51 1PQ,17/05/2011,-4.285473,55.856858\n\
14/02/2014,585903,Tuckers Cafe,Restaurant/Cafe/Canteen,1,30 Town Centre,Glasgow,G34 9DT,20/09/2013,-4.122294,55.868517\n\
14/02/2014,48831,Tumbletown,Restaurant/Cafe/Canteen,1,12 Main Street,Glasgow,G40 1HA,23/12/2013,-4.227305,55.848119\n\
14/02/2014,460424,Turners Tea Room,Restaurant/Cafe/Canteen,1,65 Craigton Road,Glasgow,G51 3RB,07/11/2013,-4.322096,55.856828\n\
14/02/2014,9499,Tusk / Waverly Tearooms,Restaurant/Cafe/Canteen,1,18 Moss Side Road,Glasgow,G41 3TN,09/02/2012,-4.281765,55.831222\n\
14/02/2014,18373,Two Fat Ladies,Restaurant/Cafe/Canteen,1,118 Blythswood Street,Glasgow,G2 4EG,07/11/2011,-4.261981,55.863961\n\
14/02/2014,95672,Two Fat Ladies,Restaurant/Cafe/Canteen,1,88 Dumbarton Road,Glasgow,G11 6NX,19/04/2012,-4.297868,55.870297\n\
14/02/2014,53582,Two Fat Ladies (Buttery) Ltd,Restaurant/Cafe/Canteen,1,654 Argyle Street,Glasgow,G3 8UF,18/01/2013,-4.27229,55.860688\n\
14/02/2014,56097,Ubiquitous Chip,Restaurant/Cafe/Canteen,1,26 Ashton Lane,Glasgow,G12 8SJ,20/10/2013,-4.292992,55.87463\n\
14/02/2014,188103,UFO Club,Restaurant/Cafe/Canteen,1,1082 South Street,Glasgow,G14 0AP,05/12/2011,-4.354441,55.876947\n\
14/02/2014,410622,Una Storia,Restaurant/Cafe/Canteen,1,35 Ashton Lane,Glasgow,G12 8SJ,04/07/2012,-4.292992,55.87463\n\
14/02/2014,79739,University Cafe,Restaurant/Cafe/Canteen,1,87 Byres Road,Glasgow,G11 5HN,24/10/2012,-4.297794,55.872033\n\
14/02/2014,26516,Up On The Hill,Restaurant/Cafe/Canteen,1,2 Eagle Street,Glasgow,G4 9XA,14/03/2012,-4.254236,55.875652\n\
14/02/2014,21825,Urban Bar And Brasserie,Restaurant/Cafe/Canteen,1,25 St Vincent Place,Glasgow,G1 2DT,05/11/2009,-4.253106,55.860825\n\
14/02/2014,23265,Vanilla Black,Restaurant/Cafe/Canteen,1,270 Sauchiehall Street,Glasgow,G2 3EH,06/02/2013,-4.262583,55.865513\n\
14/02/2014,548298,Veldt Deli Ltd,Restaurant/Cafe/Canteen,1,407 Great Western Road,Glasgow,G4 9JA,22/07/2013,-4.278692,55.874221\n\
14/02/2014,612652,Velvet Appetite,Restaurant/Cafe/Canteen,1,69 West Nile Street,Glasgow,G1 2QB,18/11/2013,-4.255136,55.862487\n\
14/02/2014,534351,Venue In The Park,Restaurant/Cafe/Canteen,1,1005 Paisley Road West,Glasgow,G52 1EQ,18/03/2013,-4.317703,55.848265\n\
14/02/2014,49144,Verona,Restaurant/Cafe/Canteen,1,88 West Regent Street,Glasgow,G2 2TU,30/04/2012,-4.257352,55.863506\n\
14/02/2014,507933,Victoria Evangelical Church,Restaurant/Cafe/Canteen,1,163 Langside Road,Glasgow,G42 7JX,06/02/2013,-4.260763,55.837766\n\
14/02/2014,95709,Victoria Park Bowling Club.,Restaurant/Cafe/Canteen,1,1284 Dumbarton Road,Glasgow,G14 9EU,24/06/2011,-4.342476,55.876043\n\
14/02/2014,35529,Victoria\'s,Restaurant/Cafe/Canteen,1,98 Sauchiehall Street,Glasgow,G2 3DE,07/05/2010,-4.256359,55.864846\n\
14/02/2014,19077,Victory Christian Centre,Restaurant/Cafe/Canteen,1,285 Langlands Road,Glasgow,G51 4AW,09/08/2010,-4.329854,55.860699\n\
14/02/2014,29006,Villa Toscana,Restaurant/Cafe/Canteen,1,1080 Argyle Street,Glasgow,G3 8LY,28/06/2013,-4.283491,55.864741\n\
14/02/2014,360811,Village Curry House,Restaurant/Cafe/Canteen,1,129 Nelson Street,Glasgow,,12/12/2013,-4.261463,55.85304\n\
14/02/2014,30939,VIP Catering,Restaurant/Cafe/Canteen,1,106 Cumberland Street,Glasgow,G5 9QX,12/09/2013,-4.25634,55.848255\n\
14/02/2014,73461,Viva,Restaurant/Cafe/Canteen,1,75 Bothwell Street,Glasgow,G2 6TS,17/06/2011,-4.261475,55.861031\n\
14/02/2014,49184,Viva Brazil,Restaurant/Cafe/Canteen,1,87 Bothwell Street,Glasgow,,14/05/2013,-4.2620194,55.86133182\n\
14/02/2014,56098,Vodka Wodka,Restaurant/Cafe/Canteen,1,31 Ashton Lane,Glasgow,G12 8SJ,18/05/2011,-4.292992,55.87463\n\
14/02/2014,133322,Wagamama,Restaurant/Cafe/Canteen,1,97 West George Street,Glasgow,G2 1PB,23/10/2013,-4.255654,55.862055\n\
14/02/2014,26406,Wagamama,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,29/10/2012,-4.342073,55.822898\n\
14/02/2014,134485,Walker Precision Engineering,Restaurant/Cafe/Canteen,1,4 Fullarton Drive,Glasgow,G32 8YL,20/04/2012,-4.174502,55.83517\n\
14/02/2014,581115,Weaver\'s Coffee House,Restaurant/Cafe/Canteen,1,503 London Road,Glasgow,G40 1NQ,22/08/2013,-4.229643,55.85018\n\
14/02/2014,31045,Wee Annie\'s,Restaurant/Cafe/Canteen,1,31 Levern Bridge Road,Glasgow,G53 7AB,07/05/2009,-4.36412,55.819186\n\
14/02/2014,77966,Wee Curry Shop,Restaurant/Cafe/Canteen,1,7 Buccleuch Street,Glasgow,G3 6SJ,07/06/2010,-4.260136,55.86714\n\
14/02/2014,448778,Wee Lochan,Restaurant/Cafe/Canteen,1,340 Crow Road,Glasgow,G11 7HT,18/09/2012,-4.32221,55.878009\n\
14/02/2014,460443,Wee Rangers Club,Restaurant/Cafe/Canteen,1,250 Edmiston Drive,Glasgow,G51 2YU,29/10/2012,-4.315055,55.853707\n\
14/02/2014,371805,Wee Tait Deli and Cakes,Restaurant/Cafe/Canteen,1,379 Paisley Road West,Glasgow,G51 1LX,22/05/2012,-4.293037,55.85181\n\
14/02/2014,126307,Wellcroft Bowling Club,Restaurant/Cafe/Canteen,1,163 Queens Drive,Glasgow,G42 8QR,27/03/2009,-4.269374,55.833698\n\
14/02/2014,129417,Wellington Church (The Crypt Cafe),Restaurant/Cafe/Canteen,1,77 Southpark Avenue,Glasgow,G12 8LE,22/09/2010,-4.287007,55.87262\n\
14/02/2014,19481,West Bar,Restaurant/Cafe/Canteen,1,15 Binnie Place,Glasgow,G40 1AW,02/07/2013,-4.234176,55.8515\n\
14/02/2014,109173,Western Lawn Tennis And Squash Club,Restaurant/Cafe/Canteen,1,44 Hyndland Road,Glasgow,G12 9UR,07/07/2010,-4.301699,55.881588\n\
14/02/2014,26137,Westmarc,Restaurant/Cafe/Canteen,1,1345 Govan Road,Glasgow,G51 4TF,26/07/2010,-4.337594,55.863985\n\
14/02/2014,40651,Westwood Catering Service,Restaurant/Cafe/Canteen,1,69 Aberdalgie Road,Glasgow,,21/06/2012,-4.11530524,55.86826533\n\
14/02/2014,125763,Whale Of A Time,Restaurant/Cafe/Canteen,1,1273 Pollokshaws Road,Glasgow,G41 3RR,02/07/2013,-4.284981,55.829158\n\
14/02/2014,562688,Wheatley House Bean Machine,Restaurant/Cafe/Canteen,1,25 Cochrane Street,Glasgow,G1 1HL,24/06/2013,-4.248266,55.86032\n\
14/02/2014,315965,Where The Monkey Sleeps,Restaurant/Cafe/Canteen,1,45 Finnieston Street,Glasgow,G3 8JU,16/09/2013,-4.280339,55.86222\n\
14/02/2014,568580,Where The Monkey Sleeps,Restaurant/Cafe/Canteen,1,182 West Regent Street,Glasgow,G2 4RU,07/01/2014,-4.261774,55.863964\n\
14/02/2014,99829,Whiteinch Bowling Club,Restaurant/Cafe/Canteen,1,28 Ferryden Street,Glasgow,G14 0SW,07/09/2010,-4.331851,55.870295\n\
14/02/2014,45653,Willow Cafe,Restaurant/Cafe/Canteen,1,225 Scotland Street,Glasgow,G5 8QB,11/01/2011,-4.275798,55.849622\n\
14/02/2014,193911,Willow Tea Rooms,Restaurant/Cafe/Canteen,1,97 Buchanan Street,Glasgow,G1 3HF,09/12/2013,-4.254819,55.860066\n\
14/02/2014,94601,Willowbank Bowling Club,Restaurant/Cafe/Canteen,1,36 Dowanside Road,Glasgow,G12 9DW,06/02/2007,-4.298293,55.875322\n\
14/02/2014,30396,Windows Restaurant,Restaurant/Cafe/Canteen,1,44 West George Street,Glasgow,,16/05/2013,-4.25322682,55.86195588\n\
14/02/2014,102691,Winter Gardens,Restaurant/Cafe/Canteen,1,1 Glasgow Green,Glasgow,G40 1AT,11/01/2012,-4.237004,55.851215\n\
14/02/2014,107369,Wishbones,Restaurant/Cafe/Canteen,1,31 High Street,Glasgow,G1 1LX,18/05/2013,-4.243279,55.857527\n\
14/02/2014,35815,Wok To Walk,Restaurant/Cafe/Canteen,1,304 Sauchiehall Street,Glasgow,G2 3JA,25/06/2012,-4.263684,55.865763\n\
14/02/2014,118094,Wolfson Hall Of Residence,Restaurant/Cafe/Canteen,1,2317 Maryhill Road,Glasgow,,17/12/2013,-4.271209,55.876461\n\
14/02/2014,516671,Wonderworld Soft Play,Restaurant/Cafe/Canteen,1,99 Middlesex Street,Glasgow,G41 1EE,23/10/2013,-4.28354,55.851681\n\
14/02/2014,118070,Wong Express,Restaurant/Cafe/Canteen,1,920 Maryhill Road,Glasgow,G20 7TA,11/11/2013,-4.280196,55.884044\n\
14/02/2014,495615,Workspace Cafe,Restaurant/Cafe/Canteen,1,100 Elderpark Street,Glasgow,G51 3TR,12/03/2013,-4.32253,55.857682\n\
14/02/2014,9656,WRVS Cafe (Gartnavel General Hospital),Restaurant/Cafe/Canteen,1,1053 Great Western Road,Glasgow,,18/02/2010,-4.354562,55.900713\n\
14/02/2014,31357,Wudon,Restaurant/Cafe/Canteen,1,535 Great Western Road,Glasgow,G12 8HN,19/11/2013,-4.282973,55.875517\n\
14/02/2014,537386,Wyndford Diner,Restaurant/Cafe/Canteen,1,186 Wyndford Road,Glasgow,G20 8HF,26/09/2013,-4.287613,55.889248\n\
14/02/2014,50801,Yarrow Recreation Club,Restaurant/Cafe/Canteen,1,223 Anniesland Road,Glasgow,G13 1RP,29/06/2012,-4.332613,55.889928\n\
14/02/2014,548302,Yarrows Cafe,Restaurant/Cafe/Canteen,1,1915 Dumbarton Road,Glasgow,G14 0YS,26/06/2013,-4.364388,55.882769\n\
14/02/2014,22410,Yasmin\'s,Restaurant/Cafe/Canteen,1,538 Dumbarton Road,Glasgow,G11 6SW,01/03/2011,-4.314597,55.870981\n\
14/02/2014,48683,Yellow Bird Cafe,Restaurant/Cafe/Canteen,1,39 Paisley Road West,Glasgow,G51 1LG,28/05/2012,-4.28068,55.853325\n\
14/02/2014,612676,Yen,Restaurant/Cafe/Canteen,1,28 Tunnel Street,Glasgow,G3 8HL,28/11/2013,-4.283461,55.859322\n\
14/02/2014,31225,Yo Sushi,Restaurant/Cafe/Canteen,1,21 Buchanan Street,Glasgow,G1 3HL,23/11/2012,-4.254903,55.859309\n\
14/02/2014,23298,Yo! Sushi,Restaurant/Cafe/Canteen,1,763 Barrhead Road,Glasgow,G53 6AG,18/11/2011,-4.342073,55.822898\n\
14/02/2014,106784,Yoker Bowling Club,Restaurant/Cafe/Canteen,1,21 Hawick Street,Glasgow,G13 4EL,13/08/2012,-4.382586,55.891137\n\
14/02/2014,111415,Yorkhill Fire Station,Restaurant/Cafe/Canteen,1,214 Kelvinhaugh Street,Glasgow,G3 8QS,28/07/2006,-4.295541,55.863923\n\
14/02/2014,589597,Young Calvay Volunteers,Restaurant/Cafe/Canteen,1,678 Duke Street,Glasgow,G31 1JZ,08/10/2013,-4.207811,55.857917\n\
14/02/2014,556112,Zebra Cafe,Restaurant/Cafe/Canteen,1,34 Queen Street,Glasgow,G1 3DX,15/04/2013,-4.251911,55.858681\n\
14/02/2014,495626,Zizzi,Restaurant/Cafe/Canteen,1,31 Royal Exchange Square,Glasgow,G1 3AJ,24/06/2013,-4.252971,55.859875\n\
14/02/2014,36248,Zizzi,Restaurant/Cafe/Canteen,1,8 Cresswell Lane,Glasgow,G12 8AA,10/05/2012,-4.292252,55.875911\n\
14/02/2014,18687,Zizzi,Restaurant/Cafe/Canteen,1,48 Buchanan Street,Glasgow,,09/08/2011,-4.25452799,55.859396\n\
14/02/2014,36323,Zoe Makes Cakes,Restaurant/Cafe/Canteen,1,66 White Street,Glasgow,G11 5ED,21/09/2010,-4.305337,55.87306\n\
14/02/2014,107368,Zorba,Restaurant/Cafe/Canteen,1,25 High Street,Glasgow,G1 1LX,06/11/2012,-4.243279,55.857527";
