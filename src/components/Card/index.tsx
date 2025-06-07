import { CardStyle, Thumbnail, Title, Time, Location, Price } from "./styles";
import { Chip } from "../Chip/index";
import { ChipColorKey } from "../Chip/styles";
import { CHIP_STATUS, CHIP_PRICE } from "../Chip/constants";

interface Props {
  itemInfo: Item;
  size?: string;
  isVertical: boolean;
}

type Item = {
  thumbnail: string;
  title: string;
  date: string;
  location: string;
  transactionStatus: string;
  priceInfo: PriceInfo[];
}; // ERD 설계 시 변경

type ChipPriceKey = keyof typeof CHIP_PRICE;

type PriceInfo = {
  title: ChipPriceKey;
  value: number;
};

const Card = ({ itemInfo, size, isVertical }: Props) => {
  const time = "2시간 전"; // 기능 및 api 연결 시 게시글 등록 시간과 현재 시간 차이 계산해서 출력하기

  const status =
    CHIP_STATUS[itemInfo.transactionStatus as keyof typeof CHIP_STATUS];

  return (
    <CardStyle isVertical={isVertical} size={size} className="flex">
      <Thumbnail size={size}>
        <Chip title={status.title} color={status.color as ChipColorKey} />
      </Thumbnail>
      <div className="flex flex-col p-2 m-0">
        <Title>{itemInfo.title}</Title>
        <div className="flex gap-2">
          <Location>{itemInfo.location}</Location>
          <Time>{time}</Time>
        </div>
        {!isVertical ? (
          <div>
            {itemInfo.priceInfo.map((info) => {
              const chip = CHIP_PRICE[info.title];
              if (!chip) return null;

              return (
                <div className="flex items-center" key={info.title}>
                  <Chip title={chip.title} color={chip.color} />
                  <Price>{info.value.toLocaleString()} 원</Price>
                </div>
              );
            })}
          </div>
        ) : (
          <Price>{itemInfo.priceInfo[0].value.toLocaleString()} 원</Price>
        )}
      </div>
    </CardStyle>
  );
};

export default Card;
