import styled from "@emotion/styled";
import React from "react";

const LoadingBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  .loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 3em;
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  .loader,
  .loader:before,
  .loader:after {
    animation: 1s infinite ease-in-out;
  }
  .loader:before,
  .loader:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .loader-black {
    background-color: #333;
  }
  .loader-8:before,
  .loader-8:after {
    content: "";
    background-color: #333;
    transform: scale(0);
    animation: loader8 1.5s infinite ease-in-out;
  }
  .loader-8:after {
    animation-delay: 0.75s;
  }

  .loader-6 {
    animation: loader6-1 1.5s infinite linear;
  }
  .loader-6:before,
  .loader-6:after {
    content: "";
    margin: -25px 0 0 -25px;
    top: 50%;
    left: 50%;
    background-color: rgba(30, 30, 30, 0.7);
    animation-name: loader6-2;
  }
  .loader-6:after {
    animation-direction: reverse;
  }

  @keyframes loader6-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader6-2 {
    0% {
      transform: scale(0.2);
      left: 0%;
    }
    50% {
      transform: scale(1);
      left: 50%;
    }
    100% {
      transform: scale(0.2);
      left: 100%;
    }
  }

  @keyframes loader8 {
    0% {
      transform: translateX(-100%) scale(0);
    }
    50% {
      transform: translateX(0%) scale(1);
    }
    100% {
      transform: translateX(100%) scale(0);
    }
  }
`;

export default function BookmarkLoadingBar() {
  return (
    <LoadingBar key={0}>
      <div className="loader loader-6" />
    </LoadingBar>
  );
}
