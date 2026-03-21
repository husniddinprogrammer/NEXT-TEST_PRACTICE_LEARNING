import Link from "next/link"

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">Home Page</Link> <br />
            <Link href="/contact">Contact Page</Link>
        </div>
    )
}
export default About;