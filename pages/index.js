import { Banner, List, Container, Callout, Gallery, FAQ, Team } from '../components/blocks'
import { Box, Button } from 'rebass'
import Link from 'next/link'
// import CTA from '../components/cta'
import Sponsors from '../components/sponsors'
import Photo from '../components/photo'

<><Banner>

    # AngelHacks

    ## Middle and high schoolers, what can _you_ make in 12 hours?

    October 26, 2019 @ Snapchat HQ in LA

    <Link href="/register">
        <Button
            as="a"
            sx={{
                bg: 'lemonade',
                color: 'white',
                borderRadius: 'circle',
                fontFamily: 'inherit',
                fontSize: [2, 3],
                lineHeight: 2,
                cursor: 'pointer',
                px: 4,
                mt: [3, 4],
                transition: 'transform ease .125s',
                ':hover, :focus': {
                    transform: 'scale(1.0625)'
                }
            }}>
            Register now »
        </Button>
    </Link>

</Banner><Container
    width="narrow"
    sx={{
        p: {
            fontSize: [2, 3, 4],
            color: 'muted',
            mb: [4, 5],
            lineHeight: 1.375,
            letterSpacing: '-.009em'
        },
        strong: {
            fontWeight: 'medium',
            color: 'text'
        }
    }}>

        **DAHacks is a 2 days hackathon.**
        150 students from all over the bay area will come in September.
        You’ll team up (maximum 4) to build an app, game, website or anything you can think of!
        Free meals, drinks and swag will be provided. Around the end of Day 2, teams will present and demo their projects to the judges and
        the best projects will win prizes. There'll be several fun activities throughout the event as well!
        **You’ll meet people, create amazing new things, & have fun.**

    </Container><Gallery>

        <Photo showAlt alt="Sticker Exchange!" src="https://angelhacks.org/static/venue/stickexchange.jpg" />
        <Photo showAlt alt="Students build projects in groups" src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" />

        <Box variant="card">

            ## A place for everyone.

            Underrepresented students are systematically discouraged from pursuing tech. Schools in LA have little to no computer science education programs—and students aren't exposed to programming until late high school or college. We're hoping to encourage students of all backgrounds, ages, and location to learn and love programming. No matter who you are, you’re welcome here—and you’ll surprise yourself by what you can accomplish. 💛

        </Box>

        <Photo showAlt alt="Workshops teach intro coding skills" src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworkshop.jpg?v=1565769230073" />

    </Gallery><Container>

        ## FAQ

        <Callout sx={{ mx: [null, null, -3, -4] }}>
            <FAQ>

                - **How much does it cost? 💸**
                Nothing at all! Registration and attendance are 100% free, with meals, drinks, swag, & workshops included. There are even prizes for the top teams!

                - **Who can participate? 🔭**
                Any current college students are welcomed! And if you're interested in mentoring or helping out, [email us](mailto:deanzahacks2023@gmail.com)

                - **Hacking‽ Is that safe? 👨🏿‍💻**
                No, we’re not “hacking” servers. The word is being constructively redefined for coding—apps, games, websites. It’s safe, supervised, & entirely educational. Now go look somewhere else, RSA.

                - **What can I make? 🤖**
                Anything! A website, app, game, hardware hack, robot, you name it. Judges will rate projects based on creativity, technical skill demonstrated, polish, utility, and, how applicable it is in real life.

                - **What if I’m new to coding? 👾**
                DAHacks not only welcomes, but encourages new coders to come! We have lots of workshops lined up and mentors will always be around to help you out with any questions. There's no better place to learn!

                - **Do I need a team? 👨‍👧‍👧**
                Yes, but don't worry if you don't have teammates! We will be pairing people who don't have a team into teams of 4 at the event.

                - **What should I bring? 🧳**
                Plan to bring a student ID, computer (any kind), chargers, anything for your hack (e.g. hardware), and enthusiasm! We'll provide snacks and meals, so you don't have to worry about that!

                - **Who runs this? Is it supervised? 👨‍🏫**
                We’re independently-organized by high schoolers, mostly from Ad Astra Hack Club, sponsored via a nonprofit called [Hack Club](https://hackclub.com/). It’s fully supervised with 20+ adult mentors & chaperones.

            </FAQ>
        </Callout>

        ## Sponsors

        <Sponsors />

        ### Additional support from

        <Sponsors
            section="additionalSupport"
            sx={{
                styles: {
                    a: {
                        ':hover, :focus': {
                            color: 'lemonade'
                        }
                    }
                }
            }} />

        ## Team

        AngelHacks is primarily run by the Hack Club at [Ad Astra](https://www.adastraschool.org).

        <Team sx={{ mt: [3, 4] }}>

            - ![Claire](https://angelhacks.org/static/profiles/claire.jpg)

            **Claire Wang** _Founder, lead. she/her_

            - ![Kai](https://angelhacks.org/static/profiles/kai.png)

            **Kai Musk** _Finance, co-lead. he/him_

            - ![Damian](https://angelhacks.org/static/profiles/damian.jpg)

            **Damian Musk** _Marketing, co-lead. he/him_

        </Team>

        ### Special thanks

        <Team sx={{ mb: [4, 5] }}>

            - ![Yasper](./static/profiles/yasper.jpg)

            **Yasper DeJong** _Local coordinator. he/him_

            - ![Evan](https://github.com/pErs0nZ.png)

            **Evan Nishi** _Advisor. he/him_

            - ![Neel](https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fneel.jpg?v=1566231402477)

            **Neel Redkar** _Tech. he/him_

            - ![Ryan](https://angelhacks.org/static/profiles/ryan.jpg)

            **Ryan Catullo** _Outreach. he/him_

        </Team>

    </Container></>
