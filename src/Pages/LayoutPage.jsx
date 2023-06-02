import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import { Section, Container } from "components";
import { Header } from "components";
export default function LayoutPage () {


    return (
        <>
            <Header/>
            <Section>
                <Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet/>
                    </Suspense>
                </Container>
            </Section>
            
        </>
    )
}