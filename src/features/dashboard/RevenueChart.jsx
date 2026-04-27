// import  {useQuery} from "@tanstack/react-query";
// import fetchUsers  from "../../api/usersApi";
import React from "react";
import {Line}  from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend} from "chart.js";
ChartJS.register( CategoryScale, LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend);

function RevenueChart({data}){
    // const{data = []} = useQuery({
    //     queryKey:["users"],
    //     queryFn: fetchUsers,
    // });
    const chartData = {
        labels : data.map((item) => item.name),
        datasets : [
            {
                label: "SimulatedRevenue",
                data: data.map(() => Math.random()*1000),
            },
        ],
    };
    return <Line data={chartData}/>
}
export default React.memo(RevenueChart);