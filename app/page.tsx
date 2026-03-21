import { Button } from "@/components/ui/cybercn/button";
import { Heading } from "@/components/ui/cybercn/heading";
import { Hr } from "@/components/ui/cybercn/hr";
import { Link } from "@/components/ui/cybercn/link";
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
      <Section>
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
