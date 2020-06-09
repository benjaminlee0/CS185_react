import React, {Component} from 'react';
import './css/Addlist.css';
var d3 = require("d3");

const data = {
    nodes: [
        {//0
            name: "Christian Bale",
            group: 1
        },
        {//1
            name: "Heath Ledger",
            group: 1
        },
        {//2
            name: "Aaron Eckhart",
            group: 1
        },
        {//3
            name: "Michael Caine",
            group: 1
        },
        {//4
            name: "Matthew McConaughey",
            group: 1
        },
        {//5
            name: "Jennifer Garner",
            group: 1
        },
        {//6
            name: "Jared Leto",
            group: 1
        },
        {//7
            name: "Denis O'Hare",
            group: 1
        },
        {//8
            name: "Ellen Burstyn",
            group: 1
        },
        {//9
            name: "Matt Damon",
            group: 1
        },
        {//10
            name: "Mackenzie Foy",
            group: 1
        },
        {//11
            name: "John Lithgow",
            group: 1
        },
        {//12
            name: "Jesse Eisenburg",
            group: 1
        },
        {//13
            name: "Woody Harrelson",
            group: 1
        },
        {//14
            name: "Emma Stone",
            group: 1
        },
        {//15
            name: "Abigail Breslin",
            group: 1
        },
        {//16
            name: "Ryan Gosling",
            group: 1
        },
        {//17
            name: "Dave Bautista",
            group: 1
        },
        {//18
            name: "Robin Wright",
            group: 1
        },
        {//19
            name: "Mark Arnold",
            group: 1
        },
        {//20
            name: "Jon Bernthal",
            group: 1
        },
        {//21
            name: "Caitriona Balfe",
            group: 1
        },
        {//22
            name: "Alden Ehrenreich",
            group: 1
        },
        {//23
            name: "Joonas Suotamo",
            group: 1
        },
        {//24
            name: "Emilia Clarke",
            group: 1
        },
        {//25
            name: "Amiee Conn",
            group: 1
        },
        {//26
            name: "Terry Walters",
            group: 1
        },
        {//27
            name: "The Dark Knight",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
        },
        {//28
            name: "Dallas Buyers Club",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg"
        },
        {//29
            name: "Interstellar",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {//30
            name: "Zombieland",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg"
        },
        {//31
            name: "Blade Runner 2049",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
        },
        {//32
            name: "Ford v Ferrari",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg"
        },
        {//33
            name: "Solo: A Star Wars Story",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"
        },
        {//34
            name: "La La Land",
            group: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg"
        },
    ],
    links: [
        {//the dark knight
            source: 27,
            target: 0
        },
        {
            source: 27,
            target: 1
        },
        {
            source: 27,
            target: 2
        },
        {
            source: 27,
            target: 3
        },
        {//dbc
            source: 28,
            target: 4
        },
        {
            source: 28,
            target: 5
        },
        {
            source: 28,
            target: 6
        },
        {
            source: 28,
            target: 7
        },
        {//interstellar
            source: 29,
            target: 4
        },
        {
            source: 29,
            target: 8
        },
        {
            source: 29,
            target: 9
        },
        {
            source: 29,
            target: 10
        },
        {
            source: 29,
            target: 11
        },
        {//zombieland
            source: 30,
            target: 12
        },
        {
            source: 30,
            target: 13
        },
        {
            source: 30,
            target: 14
        },
        {
            source: 30,
            target: 15
        },
        {//blade runner
            source: 31,
            target: 16
        },
        {
            source: 31,
            target: 17
        },
        {
            source: 31,
            target: 18
        },
        {
            source: 31,
            target: 19
        },
        {//ford v ferarri
            source: 32,
            target: 0
        },
        {
            source: 32,
            target: 9
        },
        {
            source: 32,
            target: 20
        },
        {
            source: 32,
            target: 21
        },
        {//solo
            source: 33,
            target: 22
        },
        {
            source: 33,
            target: 23
        },
        {
            source: 33,
            target: 24
        },
        {
            source: 33,
            target: 13
        },
        {//la la land
            source: 34,
            target: 25
        },
        {
            source: 34,
            target: 26
        },
        {
            source: 34,
            target: 14
        },
        {
            source: 34,
            target: 16
        },
    ]
}




export class Graph extends Component{

    constructor(props){

        super(props);
        this.state = {

        }

    }

    drag = (simulation) => {
        function dragStarted(d){
            if(!d3.event.active){
                simulation.alphaTarget(0.3).restart();
            }
                d.fx = d.x;
                d.fy = d.y;
        }

        function dragged(d){
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragEnded(d){
            if(!d3.event.active){
                simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
    }

    chart(nodes, links){
        const width = 1920;
        const height = 1000;

        const obj_links= links.map(d => Object.create(d));
        const obj_nodes= nodes.map(d => Object.create(d));

        const svg = d3.create("svg").attr("viewBox", [0,0,width,height]);

        const color = (node) => {
            if(node.group == 1){
                return d3.color("blue");
            }else{
                //return `url(#${node.poster})`;
                return d3.color("red");
            }
        }

        const defs = svg.append('svg:defs');

        

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));



        const radius = (node) => {
            if(node.group == 1){
                return 20;
            }else{
                return 40;
            }
        }

        const nodeid = (node) => {
            return node.name;
        }
        const simulation= d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => {return d.index;}).distance(450))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));


        

        const node = svg.append("g")
            //.attr("id", nodeid)
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", color)
            
            .call(this.drag(simulation));
            
        // data.nodes.forEach(node =>{
        //     if(node.group == 2){
        //         console.log(node.poster)
        //         defs.append("svg:pattern")
        //             .attr("id", node.name)
        //             .attr("width", 20)
        //             .attr("height", 20)
        //             .append("svg:image")
        //                 .attr("xlink:href", node.poster)
        //                 .attr("width", 20)
        //                 .attr("height", 20)
        //                 .attr("x", 50)
        //                 .attr("y", 50)
                    
        //     }
        // });

        node.append("svg:title")
            .text(function(d) {return d.name});




        // var svg2 = node.append("svg")
        //     .attr("width", 500)
        //     .attr("height", 500);

        // var defs = svg2.append('svg:defs');


        // defs.append("svg:pattern")
        //     .attr("id", "The Dark Knight")
        //     .attr("width", 1)
        //     .attr("height", 1)
        //     .append("svg:image")
        //         .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg')
        //         .attr("width", 1)
        //         .attr("height", 1)
        //         .attr("x", 0)
        //         .attr("y", 0);

        // var circle = svg2.append("circle")
        //     .attr("cx", 25)
        //     .attr("cy", 25)
        //     .attr("r", 25)
        //     .style("fill", "#fff")
        //     .style("fill", "url(#The Dark Knight)");



        // node.append('defs')
        //     .append('pattern')
        //         .attr('id', function(d) {return(d.id)})
        //         .attr('width', 1)
        //         .attr('height', 1)
        //         .attr('patternContentUnits', 'objectBoundingBox')
        //         .append("svg:image")
        //             .attr("xlink:xlink:href", 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg')
        //             .attr('width', 1)
        //             .attr('height', 1)
        //             .attr("preserveAspectRatio", "xMinYMin slice");

       // if(node.group == 2){
            // defs.append("svg:pattern")
            //     .attr("id", "The Dark Knight")
            //     .attr("width", 50)
            //     .attr("height", 50)
            //     .append("svg:image")
            //     .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg')
            //     .attr("width", 50)
            //     .attr("height", 50)
            //     .attr("x", 0)
            //     .attr("y", 0);
       // }

    //    var circle = svg.append("circle")
    //     .attr("cx", 25)
    //     .attr("cy", 25)
    //     .attr("r", 25)
    //     .style("fill", "#fff")
    //     .style("fill", "url(#The Dark Knight)");


        simulation.on("tick", () =>{
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });


        return svg.node();
    }

    componentDidMount(){
        const elem = document.getElementById("GraphDiv");
        elem.appendChild(this.chart(data.nodes, data.links));
    }



  render(){
    return (
        <div className = "GraphDiv" id = "GraphDiv">

        </div>
    );
  }
}
export default Graph;