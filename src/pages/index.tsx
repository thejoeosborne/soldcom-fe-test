import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
import PartialBackground from "@/components/PartialBackground";
import MainTextBlock from "@/components/MainTextBlock";

export default function Home() {
  return (
    <div>
      <PartialBackground color="dark" />
      <MainTextBlock
        title="Sold.com Difference"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nisl nisi aliquet nunc, quis aliquam nisl nunc quis nisl. Sed euismod, diam quis aliquam faucibus, nisl nisi aliquet nunc, quis aliquam nisl nunc quis nisl."
      />
    </div>
  );
}
