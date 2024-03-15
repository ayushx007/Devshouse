"use client";

import { Container, Title, Button, Group, Text, List, ThemeIcon, rem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "image.svg";
import { useEffect } from "react";
import classes from "./Hero.module.css";
import { MuseoModerno } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const museo = MuseoModerno({ weight: "700", subsets: ["latin"] });
const space = Space_Grotesk({ weight: "300", subsets: ["latin"] });

function ServerSideRendering() {
  return (
    <>
      <Title className={`${classes.title} ${museo.className}`}>
        <p className="mb-10">MLH ’24</p>
        <hr className="border-none dashed-line "></hr>
      </Title>

      <Text className={`${space.className} text-base md:text-xl lg:text-2xl sm:text-2xl md:text-justify mt-10`} mt="xl">
        A 36-hour <span className="text-[#FBBC04]"> national level technical hackathon </span>that offers students from
        across India the opportunity to
        <span className="text-[#4285F4]"> solve real-world challenges</span> of society and showcase their{" "}
        <span className="text-[#0F9D58]">innovative solutions.</span> Join us for a thrilling event, where learning
        meets excitement and
        <span className="text-[#EA4335]"> amazing prizes</span> await!
      </Text>
    </>
  );
}

export function HeroBullets() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container size={"xl"}>
      <div className="overflow-hidden">
        <div className={`${classes.inner} flex flex-col-reverse md:flex-row  items-center`}>
          <div className={classes.content}>
            <ServerSideRendering />
            <Group mt={30}>
              <a href={"https://discord.gg/UFfPjTtzh7"} target="_blank">
                <Button radius="xl" size="md" className={`button-50`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="26"
                    viewBox="0 0 34 26"
                    fill="none"
                    style={{ marginRight: " 10px" }}
                  >
                    <path
                      d="M28.721 2.13709C26.5711 1.14089 24.2435 0.417837 21.8188 7.39089e-05C21.7976 -0.000601908 21.7764 0.00336376 21.7569 0.0116921C21.7373 0.0200205 21.7198 0.0325094 21.7057 0.0482776C21.4147 0.578515 21.0753 1.26943 20.849 1.79967C18.2772 1.41404 15.6618 1.41404 13.0901 1.79967C12.8638 1.25336 12.5244 0.578515 12.2172 0.0482776C12.2011 0.016142 12.1526 7.39089e-05 12.1041 7.39089e-05C9.67944 0.417837 7.36795 1.14089 5.20193 2.13709C5.18577 2.13709 5.1696 2.15316 5.15344 2.16923C0.756754 8.70882 -0.455568 15.0717 0.142511 21.3702C0.142511 21.4024 0.158675 21.4345 0.191004 21.4506C3.10057 23.5715 5.897 24.857 8.66109 25.7085C8.70958 25.7246 8.75807 25.7085 8.77424 25.6764C9.42081 24.7927 10.0027 23.8607 10.5038 22.8806C10.5361 22.8163 10.5038 22.7521 10.4392 22.736C9.51779 22.3825 8.64492 21.9648 7.78822 21.4827C7.72356 21.4506 7.72356 21.3542 7.77205 21.306C7.94986 21.1774 8.12767 21.0328 8.30547 20.9043C8.3378 20.8721 8.3863 20.8721 8.41862 20.8882C13.9791 23.4109 19.9761 23.4109 25.4719 20.8882C25.5043 20.8721 25.5528 20.8721 25.5851 20.9043C25.7629 21.0489 25.9407 21.1774 26.1185 21.322C26.1832 21.3702 26.1832 21.4666 26.1023 21.4988C25.2618 21.9969 24.3728 22.3986 23.4514 22.7521C23.3867 22.7681 23.3706 22.8485 23.3867 22.8967C23.904 23.8768 24.4859 24.8087 25.1163 25.6925C25.1648 25.7085 25.2133 25.7246 25.2618 25.7085C28.0421 24.857 30.8385 23.5715 33.7481 21.4506C33.7804 21.4345 33.7965 21.4024 33.7965 21.3702C34.5078 14.0915 32.6166 7.77689 28.7856 2.16923C28.7695 2.15316 28.7533 2.13709 28.721 2.13709ZM11.3444 17.53C9.67944 17.53 8.28931 16.0036 8.28931 14.1237C8.28931 12.2437 9.64711 10.7173 11.3444 10.7173C13.0578 10.7173 14.4156 12.2598 14.3994 14.1237C14.3994 16.0036 13.0416 17.53 11.3444 17.53ZM22.6109 17.53C20.9459 17.53 19.5558 16.0036 19.5558 14.1237C19.5558 12.2437 20.9136 10.7173 22.6109 10.7173C24.3243 10.7173 25.6821 12.2598 25.6659 14.1237C25.6659 16.0036 24.3243 17.53 22.6109 17.53Z"
                      fill="black"
                    />
                  </svg>{" "}
                  Join Our Community
                </Button>
              </a>
              {/* <a href="https://devshouse-1.devfolio.co/" target="_blank">
                <Button radius="xl" size="md" className={`button-50`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="26"
                    viewBox="0 0 34 26"
                    fill="none"
                    style={{ marginRight: " 10px" }}
                  >
                    <path
                      d="M36.1799 21.8393C36.1799 31.1993 29.1599 38.8193 20.2799 39.5993C20.2799 39.5993 8.81986 39.8993 5.03986 39.5393C3.59986 39.3593 2.39986 38.4593 1.85986 37.1393C2.39986 37.3793 2.93986 37.5593 3.53986 37.6193C4.79986 37.7393 6.89986 37.7993 9.83986 37.7993C14.1599 37.7993 18.8999 37.6793 18.8999 37.6793H18.9599C23.6999 37.2593 28.0799 35.0993 31.1999 31.5593C33.8999 28.5593 35.6399 24.7793 36.1199 20.8193C36.1799 21.1193 36.1799 21.4793 36.1799 21.8393Z"
                      fill="black"
                    />
                    <path
                      d="M34.8 17.9994C34.8 27.3594 27.78 34.9794 18.84 35.6994C18.84 35.6994 7.38 35.9994 3.6 35.6394C1.56 35.4594 0.06 33.5394 0 31.3794L0.06 4.37938C0.12 2.21938 1.68 0.299377 3.72 0.119377C7.5 -0.180623 18.96 0.179377 18.96 0.179377C27.84 0.959377 34.8 8.63937 34.8 17.9994Z"
                      fill="black"
                    />
                  </svg>
                  Apply with Devfolio
                </Button>
              </a> */}
              {/* <Button radius="xl" size="md" className={`button-50`}>
                <div
                  className="apply-button"
                  data-hackathon-slug="devshouse-1"
                  data-button-theme="dark-inverted"
                  style={{ height: "44px", minWidth: "50px" }}
                ></div>
              </Button> */}
            </Group>
          </div>
        </div>
      </div>
    </Container>
  );
}
