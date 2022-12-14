import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function Card({ date, name, text, clock, green }) {
  return (
    <CardWrapper>
      <Green>{green}</Green>
      <Text>{text}</Text>
      <Name>{name}</Name>
      <AiOutlineClockCircle size="1rem" color="grey" />
      <Date>{date}</Date>
      <Clock>{clock}</Clock>
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  display: grid;
  margin: 2px 5px 2px 5px;
  grid-template-columns: 1.8fr 2fr 5fr;
  grid-template-rows: 1fr 1fr;
  /* grid-template-areas:
    "a b c"
    "d e f"; */
  align-content: space-between;
  padding: 10px;
  background-color: white;
  border-bottom: 1.6px solid #dadada;
`;

const Name = styled.div`
  font-size: 0.8em;
  float: right;
  margin-right: 0px;
  color: #dadada;
  text-align: right;
`;

const Green = styled.div`
  font-size: 0.8em;
  float: left;
  color: darkslategray;
  text-align: left;
  border-radius: 10px;
  padding: 0.2px;
  text-align: center;
  margin-right: 10px;
  background-color: #4cd964;
  color: white;
`;

const Text = styled.div`
  font-size: 0.8em;
  float: left;
  color: #dadada;
  text-align: left;
`;

const Date = styled.div`
  font-size: 0.8em;
  float: left;
  color: #dadada;
`;

const Clock = styled.div`
  font-size: 0.8em;
  float: left;
  border-left: 0px;
  color: #dadada;
`;