function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[74.7375643,-186.2929684],[56.3329434,-131.0465243]]).appendArc([56.2985702,-129.8967665],{"radius":2,"clockwise":true,"large":false}).appendPoint([66.0574057,-93.4762965]).appendArc([68.1822581,-92.0032686],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.6574021,-95.34573]).appendArc([102.9820395,-95.4045442],{"radius":2,"clockwise":true,"large":false}).appendPoint([125.8444899,-101.5305193]).appendArc([126.1550415,-101.6419035],{"radius":2,"clockwise":true,"large":false}).appendPoint([142.219947,-108.9503481]).appendArc([143.0481366,-109.1298805],{"radius":2,"clockwise":false,"large":false}).appendPoint([169.0459706,-109.1298805]).appendArc([169.8741602,-108.950348],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.9390658,-101.6419034]).appendArc([186.2496173,-101.5305193],{"radius":2,"clockwise":true,"large":false}).appendPoint([209.1120677,-95.4045442]).appendArc([209.4367051,-95.34573],{"radius":2,"clockwise":true,"large":false}).appendPoint([243.9118492,-92.0032686]).appendArc([246.0367014,-93.4762965],{"radius":2,"clockwise":true,"large":false}).appendPoint([255.795537,-129.8967665]).appendArc([255.7611638,-131.0465243],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.3565429,-186.2929684]).appendArc([235.9767024,-187.5927002],{"radius":2,"clockwise":true,"large":false}).appendPoint([179.3151414,-202.7751197]).appendArc([178.7975033,-202.843268],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.2966039,-202.843268]).appendArc([132.7789659,-202.7751197],{"radius":2,"clockwise":true,"large":false}).appendPoint([76.1174047,-187.5927003]).appendArc([74.7375643,-186.2929683],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        