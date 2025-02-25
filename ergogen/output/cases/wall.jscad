function big_board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[72.3860942,-187.5077717],[58.1842364,-115.9271928]]).appendArc([58.2141459,-115.020334],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.6431921,-91.0268067]).appendArc([66.7680445,-89.5537788],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.2431885,-92.8962402]).appendArc([101.5678259,-92.9550544],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.2939797,-100.1163058]).appendArc([128.6045313,-100.22769],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.6694368,-107.5361346]).appendArc([145.4976264,-107.715667],{"radius":2,"clockwise":false,"large":false}).appendPoint([166.5964808,-107.715667]).appendArc([167.4246704,-107.5361345],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.489576,-100.2276899]).appendArc([183.8001275,-100.1163058],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.5262813,-92.9550544]).appendArc([210.8509187,-92.8962402],{"radius":2,"clockwise":true,"large":false}).appendPoint([245.3260628,-89.5537788]).appendArc([247.450915,-91.0268067],{"radius":2,"clockwise":true,"large":false}).appendPoint([253.8799613,-115.0203339]).appendArc([253.9098708,-115.9271928],{"radius":2,"clockwise":true,"large":false}).appendPoint([239.708013,-187.5077717]).appendArc([238.2638897,-189.0504026],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.9009277,-205.2246095]).appendArc([177.3832897,-205.2927578],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.7108175,-205.2927578]).appendArc([134.1931795,-205.2246095],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.8302174,-189.0504026]).appendArc([72.3860943,-187.5077717],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[74.7375643,-186.2929684],[56.3329434,-131.0465243]]).appendArc([56.2985702,-129.8967665],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.0574057,-93.4762965]).appendArc([68.1822581,-92.0032686],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.6574021,-95.34573]).appendArc([102.9820395,-95.4045442],{"radius":2,"clockwise":true,"large":false}).appendPoint([125.8444899,-101.5305193]).appendArc([126.1550415,-101.6419035],{"radius":2,"clockwise":true,"large":false}).appendPoint([142.219947,-108.9503481]).appendArc([143.0481366,-109.1298805],{"radius":2,"clockwise":false,"large":false}).appendPoint([169.0459706,-109.1298805]).appendArc([169.8741602,-108.950348],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.9390658,-101.6419034]).appendArc([186.2496173,-101.5305193],{"radius":2,"clockwise":true,"large":false}).appendPoint([209.1120677,-95.4045442]).appendArc([209.4367051,-95.34573],{"radius":2,"clockwise":true,"large":false}).appendPoint([243.9118492,-92.0032686]).appendArc([246.0367014,-93.4762965],{"radius":2,"clockwise":true,"large":false}).appendPoint([255.795537,-129.8967665]).appendArc([255.7611638,-131.0465243],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.3565429,-186.2929684]).appendArc([235.9767024,-187.5927002],{"radius":2,"clockwise":true,"large":false}).appendPoint([179.3151414,-202.7751197]).appendArc([178.7975033,-202.843268],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.2966039,-202.843268]).appendArc([132.7789659,-202.7751197],{"radius":2,"clockwise":true,"large":false}).appendPoint([76.1174047,-187.5927003]).appendArc([74.7375643,-186.2929683],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _outer_wall_case_fn() {
                    

                // creating part 0 of case _outer_wall
                let _outer_wall__part_0 = big_board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outer_wall__part_0_bounds = _outer_wall__part_0.getBounds();
                let _outer_wall__part_0_x = _outer_wall__part_0_bounds[0].x + (_outer_wall__part_0_bounds[1].x - _outer_wall__part_0_bounds[0].x) / 2
                let _outer_wall__part_0_y = _outer_wall__part_0_bounds[0].y + (_outer_wall__part_0_bounds[1].y - _outer_wall__part_0_bounds[0].y) / 2
                _outer_wall__part_0 = translate([-_outer_wall__part_0_x, -_outer_wall__part_0_y, 0], _outer_wall__part_0);
                _outer_wall__part_0 = rotate([0,0,0], _outer_wall__part_0);
                _outer_wall__part_0 = translate([_outer_wall__part_0_x, _outer_wall__part_0_y, 0], _outer_wall__part_0);

                _outer_wall__part_0 = translate([0,0,0], _outer_wall__part_0);
                let result = _outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _inner_wall_case_fn() {
                    

                // creating part 0 of case _inner_wall
                let _inner_wall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _inner_wall__part_0_bounds = _inner_wall__part_0.getBounds();
                let _inner_wall__part_0_x = _inner_wall__part_0_bounds[0].x + (_inner_wall__part_0_bounds[1].x - _inner_wall__part_0_bounds[0].x) / 2
                let _inner_wall__part_0_y = _inner_wall__part_0_bounds[0].y + (_inner_wall__part_0_bounds[1].y - _inner_wall__part_0_bounds[0].y) / 2
                _inner_wall__part_0 = translate([-_inner_wall__part_0_x, -_inner_wall__part_0_y, 0], _inner_wall__part_0);
                _inner_wall__part_0 = rotate([0,0,0], _inner_wall__part_0);
                _inner_wall__part_0 = translate([_inner_wall__part_0_x, _inner_wall__part_0_y, 0], _inner_wall__part_0);

                _inner_wall__part_0 = translate([0,0,0], _inner_wall__part_0);
                let result = _inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outer_wall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _inner_wall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        