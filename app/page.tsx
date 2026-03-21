import { Button } from "@/components/ui/cybercn/button";
import { Heading } from "@/components/ui/cybercn/heading";
import { Hr } from "@/components/ui/cybercn/hr";
import { Image } from "@/components/ui/cybercn/image";
import { Link } from "@/components/ui/cybercn/link";
import { List } from "@/components/ui/cybercn/list";
import { LI } from "@/components/ui/cybercn/list-item";
import { Paragraph } from "@/components/ui/cybercn/paragraph";
import { Section } from "@/components/ui/cybercn/section";

export default function Home() {
  return (
    <>
      <Section>
        <Link className="cyberpunk red" href="#">
          Link red_
        </Link>
        <Button className="cyberpunk green">Button green_</Button>
        <Link className="cyberpunk purple" href="#">
          Link purple_
        </Link>
        <Button variant="blue">Button blue_</Button>
      </Section>

      <Section both>
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

      {/* TODO: FORM AND INPUTS INTO COMPONENTS */}
      {/* <Section>
        <form className="max-w-125">
          <input className="cyberpunk" type="text" />
          <input className="cyberpunk" type="date" />
          <input className="cyberpunk" type="time" />
          <input className="cyberpunk" type="file" />
          <input className="cyberpunk" type="phone" />
          <input className="cyberpunk" type="number" />
          <input className="cyberpunk" type="password" />
          <textarea className="cyberpunk"></textarea>
          <select className="cyberpunk">
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
          <br />
          <label className="cyberpunk">
            <input className="cyberpunk" name="test" type="radio" /> RADIO
            BUTTON Lorem ipsum sid amet.
          </label>
          <br />
          <label className="cyberpunk">
            <input
              className="cyberpunk"
              name="test"
              type="radio"
              checked="checked"
            />{" "}
            RADIO BUTTON Lorem ipsum sid amet.
          </label>
          <br />
          <label className="cyberpunk">
            <input className="cyberpunk" type="checkbox" /> CHECKBOX Lorem ipsum
            sid amet.
          </label>
          <br />
          <label className="cyberpunk">
            <input className="cyberpunk" type="checkbox" checked="checked" />{" "}
            CHECKBOX Lorem ipsum sid amet.
          </label>
          <br />
          <button type="submit" className="cyberpunk red">
            Submit_
          </button>
        </form>
      </Section> */}

      <Section className="flex gap-4">
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
          <a href="#">futuristic setting that</a> tends to focus on a
          &ldquo;combination of low-life and high tech&rdquo;[1] featuring
          advanced technological and scientific achievements, such as artificial
          intelligence and cybernetics, juxtaposed with a degree of breakdown or
          radical change in the social order.[2] Much of cyberpunk is rooted in
          the New Wave science fiction movement of the 1960s and 1970s, when
          writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G.
          Ballard, Philip José Farmer and Harlan Ellison examined the impact of
          drug culture, technology, and the sexual revolution while avoiding the
          utopian tendencies of earlier science fiction.
        </Paragraph>
        <List Tag="ul">
          <LI>
            Cyberpunk is a subgenre of science fiction in a dystopian{" "}
            <a href="#">futuristic setting that</a> tends to focus on a
            &ldquo;combination of low-life and high tech&rdquo;
          </LI>
          <LI glitched>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </LI>
          <LI>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </LI>
          <LI>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </LI>
          <LI>
            Cyberpunk is a subgenre of science fiction in a dystopian futuristic
            setting that tends to focus on a &ldquo;combination of low-life and
            high tech&rdquo;
          </LI>
          <LI>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </LI>
          <LI>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </LI>
          <LI>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </LI>
        </List>
        <Paragraph inverse scannedv>
          Cyberpunk is a subgenre of science fiction in a dystopian{" "}
          <a href="#">futuristic setting that</a> tends to focus on a
          &ldquo;combination of low-life and high tech&rdquo;[1] featuring
          advanced technological and scientific achievements, such as artificial
          intelligence and cybernetics, juxtaposed with a degree of breakdown or
          radical change in the social order.[2] Much of cyberpunk is rooted in
          the New Wave science fiction movement of the 1960s and 1970s, when
          writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G.
          Ballard, Philip José Farmer and Harlan Ellison examined the impact of
          drug culture, technology, and the sexual revolution while avoiding the
          utopian tendencies of earlier science fiction.
        </Paragraph>
        <Paragraph inverse dotted scannedh>
          Cyberpunk is a subgenre of science fiction in a dystopian{" "}
          <a href="#">futuristic setting that</a> tends to focus on a
          &ldquo;combination of low-life and high tech&rdquo;[1] featuring
          advanced technological and scientific achievements, such as artificial
          intelligence and cybernetics, juxtaposed with a degree of breakdown or
          radical change in the social order.[2] Much of cyberpunk is rooted in
          the New Wave science fiction movement of the 1960s and 1970s, when
          writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G.
          Ballard, Philip José Farmer and Harlan Ellison examined the impact of
          drug culture, technology, and the sexual revolution while avoiding the
          utopian tendencies of earlier science fiction.
        </Paragraph>
        <List Tag="ol">
          <LI>
            Cyberpunk is a subgenre of science fiction in a dystopian{" "}
            <a href="#">futuristic setting that</a> tends to focus on a
            &ldquo;combination of low-life and high tech&rdquo;
          </LI>
          <LI>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </LI>
          <LI>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </LI>
          <LI glitched>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </LI>
          <LI>
            Cyberpunk is a subgenre of science fiction in a dystopian futuristic
            setting that tends to focus on a &ldquo;combination of low-life and
            high tech&rdquo;
          </LI>
          <LI>
            featuring advanced technological and scientific achievements, such
            as artificial intelligence and cybernetics, juxtaposed with a degree
            of breakdown or radical change in the social order.
          </LI>
          <LI>
            Much of cyberpunk is rooted in the New Wave science fiction movement
            of the 1960s and 1970s, when writers like Philip K. Dick, Roger
            Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan
            Ellison examined the impact of drug culture, technology,
          </LI>
          <LI>
            and the sexual revolution while avoiding the utopian tendencies of
            earlier science fiction.
          </LI>
        </List>
      </Section>

      <aside className="cyberpunk">
        <ul>
          <li>
            <a href="#">&#9760; 555 555 555</a>
          </li>
          <li>
            <a href="#">&#x2622; Contact us</a>
          </li>
          <li>
            <a href="#">&#x267B; Location in the map</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
