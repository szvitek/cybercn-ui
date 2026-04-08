import { BoxTreeComponent } from "@/components/boxtree";
import { FormComponent } from "@/components/form";
import { ModeToggle } from "@/components/mode-toggle";
import { Aside } from "@/components/ui/cybercn/aside";
import { Button } from "@/components/ui/cybercn/button";
import { Footer } from "@/components/ui/cybercn/footer";
import { Header } from "@/components/ui/cybercn/header";
import { Heading } from "@/components/ui/cybercn/heading";
import { Hr } from "@/components/ui/cybercn/hr";
import { Image } from "@/components/ui/cybercn/image";
import { Link } from "@/components/ui/cybercn/link";
import { List } from "@/components/ui/cybercn/list";
import { Paragraph } from "@/components/ui/cybercn/paragraph";
import { Section } from "@/components/ui/cybercn/section";
import { Step, Steps } from "@/components/ui/cybercn/steps";
import { Biohazard, Recycle, Skull } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header className="flex items-center justify-end">
        <ModeToggle />
      </Header>
      <Section>
        <div className="grid grid-cols-4 place-items-center gap-2 w-[80%] mx-auto">
          {/* BUTTONS LG */}
          <Button asChild variant="red" glitchLabel="R-25" size="lg">
            <Link href="#">Link red_</Link>
          </Button>
          <Button variant="green" size="lg">
            Button green_
          </Button>
          <Button asChild variant="purple" glitchLabel="R-25" size="lg">
            <Link href="#">Link purple_</Link>
          </Button>
          <Button variant="blue" glitchLabel="X-99" size="lg">
            Button blue_
          </Button>

          {/* BUTTONS MD */}
          <Button asChild variant="red" glitchLabel="R-25">
            <Link href="#">Link red_</Link>
          </Button>
          <Button variant="green">Button green_</Button>
          <Button asChild variant="purple" glitchLabel="R-25">
            <Link href="#">Link purple_</Link>
          </Button>
          <Button variant="blue" glitchLabel="X-99">
            Button blue_
          </Button>
          <Button asChild variant="red" glitchLabel="R-25" size="sm">
            <Link href="#">Link red_</Link>
          </Button>

          {/* BUTTONS SM */}
          <Button variant="green" size="sm">
            Button green_
          </Button>
          <Button asChild variant="purple" glitchLabel="R-25" size="sm">
            <Link href="#">Link purple_</Link>
          </Button>
          <Button variant="blue" glitchLabel="X-99" size="sm">
            Button blue_
          </Button>
          <Button asChild variant="red" glitchLabel="R-25" size="icon">
            <Link href="#">
              <Skull className="size-4" />
            </Link>
          </Button>

          {/* BUTTONS ICON */}
          <Button variant="green" size="icon">
            <Skull className="size-4" />
          </Button>
          <Button asChild variant="purple" glitchLabel="R-25" size="icon">
            <Link href="#">
              <Skull className="size-4" />
            </Link>
          </Button>
          <Button variant="blue" glitchLabel="X-99" size="icon">
            <Skull className="size-4" />
          </Button>
        </div>
      </Section>

      <Section withSide>
        <Heading Tag="h1">H1 title</Heading>
        <Heading Tag="h1" glitched>
          H1 title glitched
        </Heading>
        <Heading Tag="h2">H2 title</Heading>
        <Heading Tag="h2" glitched>
          H2 title glitched
        </Heading>
        <Heading Tag="h3">H3 title</Heading>
        <Heading Tag="h3" glitched>
          H3 title glitched
        </Heading>
        <Heading Tag="h4">H4 title</Heading>
        <Heading Tag="h4" glitched>
          H4 title glitched
        </Heading>
        <Hr />
        <Hr glitched />
      </Section>

      <Section withSide>
        <FormComponent />
      </Section>

      <Section className="flex gap-4 max-w-full flex-col md:flex-row">
        <Image
          src="https://dummyimage.com/600x400/ff00ff/fff"
          alt=""
          width={600}
          height={400}
        />
        <Image
          src="https://dummyimage.com/600x400/ff00ff/fff"
          alt=""
          width={600}
          height={400}
          dotted
        />
      </Section>

      <Section className="flex flex-col gap-4">
        <Paragraph>
          Cyberpunk is a subgenre of science fiction in a dystopian{" "}
          <a href="#">futuristic setting that</a>{" "}
          {` tends to focus on a
          &ldquo;combination of low-life and high tech&rdquo;[1] featuring
          advanced technological and scientific achievements, such as artificial
          intelligence and cybernetics, juxtaposed with a degree of breakdown or
          radical change in the social order.[2] Much of cyberpunk is rooted in
          the New Wave science fiction movement of the 1960s and 1970s, when
          writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G.
          Ballard, Philip José Farmer and Harlan Ellison examined the impact of
          drug culture, technology, and the sexual revolution while avoiding the
          utopian tendencies of earlier science fiction.`}
        </Paragraph>
        <List variant="ul">
          <List.Item>
            Cyberpunk is a subgenre of science fiction in a dystopian{" "}
            <a href="#">futuristic setting that</a>
            {` tends to focus on a
            &ldquo;combination of low-life and high tech&rdquo;`}
          </List.Item>
          <List.Item glitched>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </List.Item>
          <List.Item>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </List.Item>
          <List.Item>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </List.Item>
          <List.Item>
            Cyberpunk is a subgenre of science fiction in a dystopian futuristic
            setting that tends to focus on a &ldquo;combination of low-life and
            high tech&rdquo;
          </List.Item>
          <List.Item>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </List.Item>
          <List.Item>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </List.Item>
          <List.Item>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </List.Item>
        </List>
        <Paragraph inverse scanned="vertical">
          Cyberpunk is a subgenre of science fiction in a dystopian{" "}
          <a href="#">futuristic setting that</a>{" "}
          {` tends to focus on a
          &ldquo;combination of low-life and high tech&rdquo;[1] featuring
          advanced technological and scientific achievements, such as artificial
          intelligence and cybernetics, juxtaposed with a degree of breakdown or
          radical change in the social order.[2] Much of cyberpunk is rooted in
          the New Wave science fiction movement of the 1960s and 1970s, when
          writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G.
          Ballard, Philip José Farmer and Harlan Ellison examined the impact of
          drug culture, technology, and the sexual revolution while avoiding the
          utopian tendencies of earlier science fiction.`}
        </Paragraph>
        <Paragraph inverse dotted scanned="horizontal">
          Cyberpunk is a subgenre of science fiction in a dystopian{" "}
          <a href="#">futuristic setting that</a>{" "}
          {` tends to focus on a
          &ldquo;combination of low-life and high tech&rdquo;[1] featuring
          advanced technological and scientific achievements, such as artificial
          intelligence and cybernetics, juxtaposed with a degree of breakdown or
          radical change in the social order.[2] Much of cyberpunk is rooted in
          the New Wave science fiction movement of the 1960s and 1970s, when
          writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G.
          Ballard, Philip José Farmer and Harlan Ellison examined the impact of
          drug culture, technology, and the sexual revolution while avoiding the
          utopian tendencies of earlier science fiction.`}
        </Paragraph>
        <List variant="ol">
          <List.Item>
            Cyberpunk is a subgenre of science fiction in a dystopian{" "}
            <a href="#">futuristic setting that</a>{" "}
            {` tends to focus on a
            &ldquo;combination of low-life and high tech&rdquo;`}
          </List.Item>
          <List.Item>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </List.Item>
          <List.Item>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </List.Item>
          <List.Item glitched>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </List.Item>
          <List.Item>
            Cyberpunk is a subgenre of science fiction in a dystopian futuristic
            setting that tends to focus on a &ldquo;combination of low-life and
            high tech&rdquo;
          </List.Item>
          <List.Item>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </List.Item>
          <List.Item>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </List.Item>
          <List.Item>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </List.Item>
        </List>
      </Section>

      <Section withSide>
        <BoxTreeComponent />
      </Section>

      <Section>
        <Steps>
          <Step>Text 1</Step>
          <Step>Text extra extra large 2</Step>
          <Step>Texto 3</Step>
          <Step>Text extra extra large 4 </Step>
          <Step>
            Text 5<br />
            new Stepne
            <br />
            new Stepne
          </Step>
          <Step>Text large 6</Step>
          <Step current>Text 7</Step>
          <Step>Text 8</Step>
          <Step>Text 9</Step>
          <Step>Text 10</Step>
        </Steps>
      </Section>

      <Aside>
        <Aside.Item href="#" icon={Skull}>
          555 555 555
        </Aside.Item>
        <Aside.Item href="#" icon={Biohazard}>
          Contact us
        </Aside.Item>
        <Aside.Item href="#" icon={Recycle}>
          Location in the map
        </Aside.Item>
      </Aside>

      <Footer className="flex items-center justify-center p-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} CyberCN UI. All rights reserved.
        </p>
      </Footer>
    </>
  );
}
