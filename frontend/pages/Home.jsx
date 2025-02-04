import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style/home.css";
import axios from "axios";
import urlJoin from "url-join";
import Card from "./components/Card";

export const Home = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: "Publish/Schedule Post",
      description: "Manage your post scheduling and publishing options here.",
      link: "/publish",
    },
    {
      title: "Post History",
      description: "View and analyze your past posts and their performance.",
      link: "/history",
    },
    {
      title: "Configuration",
      description: "Adjust your account settings and preferences.",
      link: "/config",
    },
  ];
  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          onClick={() => navigate(card.link)}
        />
      ))}
    </div>
  );
};
