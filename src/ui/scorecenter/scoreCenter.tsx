
import { Box, Grid2 } from "@mui/material";
import Cardcmp from "../dashboard/cardcmp"
import Clicktoback from "../profile/clicktoback"
import DropdownList from "./dropdownList";


const ScoreCenter = ({ product }: { product?: any }) => {

    const products = [
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov3.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov3.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
        { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
    ];
    return (
        <>
            <Clicktoback href={"/dashboard/invest"} title={"Scoring Center"} />
            <Box py={2}>
            <DropdownList />
            </Box>
            <Grid2 container spacing={2}>
                {products.map((product, index) => {
                    return (
                        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }} >
                            <Cardcmp product={product} />
                        </Grid2>
                    )
                })}
            </Grid2>

        </>
    )
}

export default ScoreCenter