import React, {useEffect} from "react";
import "./GraphSearch.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Flex,
    Heading, SearchField,

} from '@aws-amplify/ui-react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {API, Storage} from "aws-amplify";
import {listNotes} from "../../graphql/queries";
// Load Highcharts modules
require('highcharts/modules/networkgraph')(Highcharts);

const options = {
    chart: {
        type: "networkgraph",
        marginTop: 20
    },
    title: {
        text: "Anycompany Artifacts"
    },
    plotOptions: {
        networkgraph: {
            keys: ["from", "to"],
            layoutAlgorithm: {
                enableSimulation: true,
                gravitationalConstant: 0.2,
                friction: -0.9
            }
        }
    },
    series: [
        {
            events: {
                click: (e) => {
                    this.onClick(e);
                }
            },
            marker: {
                radius: 10
            },
            dataLabels: {
                enabled: true,
                linkFormat: "",
                allowOverlap: true
            },
            data: [
                ["78291, United Airlines", "81201, Fuselage"],
                ["78291, United Airlines", "32812, Tail"],
                ["78291, United Airlines", "83212, Radome"],
                ["78291, United Airlines", "32918, Wings"],
                ["78291, United Airlines", "55923, APU"],
                ["78291, United Airlines", "12311, Engine"],
                ["78291, United Airlines", "91212, Landing Gear"],
                ["78291, United Airlines", "67191, Interiors"],
                ["81201, Fuselage", "32112, 43 Sec"],
                ["81201, Fuselage", "32113, 44 Sec"],
                ["81201, Fuselage", "32321, Aft"],
                ["32321, Aft", "42321, Aft Lwr Cargo Door"],
                ["42321, Aft Lwr Cargo Door", "42341, Aft Door"],
                ["32113, 44 Sec", "15441, AOE Doors"],
                ["32918, Wings", "32391, Inboard Flap"],
                ["32918, Wings", "12123, Spoilers"],
                ["12123, Spoilers", "12912, Kreuger Flaps"],
                ["83212, Radome", "38129, Nose Gear"],
                ["83212, Radome", "38122, Nose Gear Door"],
                ["32812, Tail", "93212, Tail Cone"],
                ["32812, Tail", "93241, Rudder"],
                ["32812, Tail", "93242, Tail Cone Spirit"],
                ["93212, Tail Cone", "15441, Flap Track Fairing"],
                ["93212, Tail Cone", "15241, Flap Track"],
                ["93212, Tail Cone", "15241, Stabilizer Tip"],
                ["93241, Rudder", "52341, Stabilizer"],
                ["93241, Rudder", "65341, Cone Spirit"],
                ["93241, Rudder", "32341, Vertical Fin"],
                ["93241, Rudder", "35441, Left Fin Panel"],
                ["93241, Rudder", "15441, Right Fin Panel"],
                ["15441, Flap Track Fairing", "15241, Aileron"],
                ["15441, Flap Track Fairing", "96241, Winglet"],
                ["96241, Winglet", "96241, Inboard Flaps"],
                ["15241, Flap Track", "96241, Outboard Flaps"],
                ["15241, Stabilizer Tip", "Konfirmat 23.0"],
                ["52341, Stabilizer", "Inner Nose 105"],
                ["32341, Vertical Fin", "Lens Assembly"],
                ["35441, Left Fin Panel", "Sheet Panel 22/3, 23"],
                ["15441, Right Fin Panel", "Sheet Panel 32/3, 23"],
                ["91212, Landing Gear", "Rear Camera 92.1 3/5"],
                ["91212, Landing Gear", "2322A, Suspension"],
                ["2322A, Suspension", "Spring Suspension"],
                ["2322A, Suspension", "Coil Metal 391.2"],
                ["2322A, Suspension", "Metal Fixture 2.2"],
                ["78291, United Airlines", "91021, Fan Cowl"],
                ["78291, United Airlines", "93121, At Galley"],
                ["78291, United Airlines", "21121, Winglet"],
                ["78291, United Airlines", "31921, Exhaust"],
                ["67191, Interiors", "93242, Galley"],
                ["67191, Interiors", "93242, Entertainment"],
                ["12311, Engine", "93242, Engine CFM"],
                ["12311, Engine", "33242, Fan Cowl"],
                ["12311, Engine", "32242, Thruster Assembly"],
                ["12311, Engine", "52242, Primary Exhaust"],
                ["32321, Aft", "Front Gasket 232m"],
                ["32321, Aft", "21232s, Small PNP Transistor"],
                ["32321, Aft", "Signal Diode 23R"],
                ["32321, Aft", "Single Gate 32/21S"],
                ["42321, Aft Lwr Cargo Door", "34232, Door Hinges"],
                ["42341, Aft Door", "TUBE PILOT,MODULATION-"],
                ["55923, APU", "BRACKET,ROTOR CONTR-"],
                ["32112, 43 Sec", "S35-12 Dhe Sprocket"],
                ["15441, AOE Doors", "TANK,OIL LUBE,ROTAR"],
                ["15441, AOE Doors", "GASPER HEAD 31"],
                ["15441, AOE Doors", "KEEPER,DOOR LATCH 12"],
                ["15441, AOE Doors", "DRIVE UNIT 12, ANGLE"],
                ["15441, AOE Doors", "S35-12 Dhes Sprocket"],
                ["15441, AOE Doors", "SIDE PAN, AFT, LH"],
                ["15441, AOE Doors", "6/8 DEFOG NOZZLE"],
                ["15441, AOE Doors", "Plug,Sidewall Right"],
                ["15441, AOE Doors", "Support, 12 Tie Rod"],
                ["15441, AOE Doors", "12 PANEL ARMOR MID RH-"],
                ["15441, AOE Doors", "35yd Accumulator"],
                ["32391, Inboard Flap", "1/2 in Nut, Slotted"],
                ["32391, Inboard Flap", "Oscan 232"],
                ["12123, Spoilers", "Housing,Exit Let Side"],
                ["12912, Kreuger Flaps", "33225 Capturenprint"],
                ["12912, Kreuger Flaps", "Clevis-Igf Bal Spring, Col"],
                ["12912, Kreuger Flaps", "Left Door Panel-"],
                ["12912, Kreuger Flaps", "3cm Cover,Filter"],
                ["12912, Kreuger Flaps", "12122 Clamp-"],
                ["12912, Kreuger Flaps", "44m Simulator-Iitv"],
                ["12912, Kreuger Flaps", "F/D Mod Select Panel"],
                ["12912, Kreuger Flaps", "33 Rhaeto-Romance"],
                ["38129, Nose Gear", "Capture print"],
                ["38129, Nose Gear", "S35-12232 Dhe Sprocket"],
                ["38129, Nose Gear", "3mm Mass Simulator-Iitv"],
                ["38129, Nose Gear", "322.2 Accumulator"],
                ["38122, Nose Gear Door", "21233, Keeper,Door Latch"],
                ["38122, Nose Gear Door", "Rotor Contr-"],
                ["38122, Nose Gear Door", "32322, Searchlight Myii"],
                ["93242, Tail Cone Spirit", "23254, Cim Gear - 12 X 520"],
                ["Sheet Panel 22/3, 23", "Sleeve L/H- 45mm"],
                ["Sheet Panel 32/3, 23", "R55-12 Dhe Sprocket"],
                ["Sheet Panel 32/3, 23", "1/2 Yiddish"],
                ["Inner Nose 105", "75R Cyclic Door"],
                ["Lens Assembly", "3mm Mount,Resilient"],
                ["Lens Assembly", "1/2 in Defog Nozzle"],
                ["Lens Assembly", "3232, Plug,Sidewall"],
                ["Lens Assembly", "Nut,Plain Capturenprint"],
                ["Lens Assembly", "A35-12 Dhe Sprocket"],
                ["Lens Assembly", "Stripped AB75R Cyclic Door"],
                ["65341, Cone Spirit", "32321, Tube Pilot,Modulation-"],
                ["Konfirmat 23.0", "Nut,Plain,Slotted 43.3"],
                ["96241, Outboard Flaps", "Mass Simulator-Itv"],
                ["96241, Inboard Flaps", "Accumulator 5.5 "],
                ["15441, Flap Track Fairing", "212.2 Accumulator"],
                ["15241, Aileron", "Stripped B752R Cyclic Door"],
                ["Rear Camera 92.1 3/5", "12/12 Gasper Head"],
                ["Rear Camera 92.1 3/5", "7/7 yd Tube,Bypass"],
                ["Rear Camera 92.1 3/5", "657, Mass Simulator-Iitv"],
                ["Coil Metal 391.2", "43443, Tube,Bypass"],
                ["Coil Metal 391.2", "43, Sleeve L/H-"],
                ["Coil Metal 391.2", "23223, Stripped B75R Cyclic Door"],
                ["Coil Metal 391.2", "Mount,Resilient"],
                ["Spring Suspension", "Stiffener, Nose Fairing"],
                ["Spring Suspension", "653434, Tube,Bypass"],
                ["Spring Suspension", "1/2 in Tube,Pilot Junction"],
                ["Spring Suspension", "32/32.3 Turbo-Croatian"],
                ["Spring Suspension", "1/2 Sleeve L/H-"],
                ["Metal Fixture 2.2", "121 Tube ,Modulation-"],
                ["Metal Fixture 2.2", "2312, Stripped B75R Cyclic Door"],
                ["Metal Fixture 2.2", "3232.4 Lock,Pin,Timing"],
                ["Metal Fixture 2.2", "54.5 Gasper Head"]
            ]
        }
    ]
};

const GraphSearch = () => {

    useEffect(() => {
        updateGraph();
    }, []);

    async function updateGraph() {

    }

    return (
        <Flex
            direction={{base: 'column', large: 'column'}}
            padding="1rem"
            width="100%"
        >
            <Heading level={4} style={{textAlign: "left"}}>Entity Search</Heading>
            <Flex direction={{base: 'row', large: 'row'}}
                  padding="1rem"
                  width="50%"
                  style={{alignItems: "center", margin: "auto", display: "block"}}
            >
                <SearchField
                    label="Search"
                    placeholder="Search for Entities..."
                    size={"large"}
                />
            </Flex>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: "1000px", display: "block", width: "90%", margin: "0 auto" } }}/>
        </Flex>
    );
};

export default GraphSearch;