import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import FooterComponent from "../../components/common/footer/footer";
import HeaderComponent from "../../components/common/header/header";

const EventsPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Events</title>
        <meta name="description" content="NextJS Events Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      <main className="p-10">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i events</code>
          </pre>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
};

export default EventsPage;
