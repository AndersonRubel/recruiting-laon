import styles from "./page.module.css";
import Head from "next/head";

export default function Movie({ params }: { params: { slug: string } }) {
  return <div>My Movie: {params.slug}</div>;
}
