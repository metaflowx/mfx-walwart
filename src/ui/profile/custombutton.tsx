import { Button } from "@mui/material"
import Link from "next/link"

interface props {
    href: string;
    title: string;
}

const CustomButton = ({ href, title }: props) => {
    return (
        <>
            <Link href={href} style={{ width: '100%' }}>
                <Button sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid #0071CE',
                    color: '#000',
                    boxShadow: 'none',
                    padding: '0.5rem 1rem',
                    '&:hover': {
                        backgroundColor: '#0071CE',
                        color: '#fff'

                    }
                }} fullWidth variant="contained">{title}</Button>
            </Link>
        </>
    )
}


export default CustomButton