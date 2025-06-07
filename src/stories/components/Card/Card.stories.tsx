import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../../components/Card";

// CardWrapper Props 타입 정의
interface CardWrapperProps {
  itemInfo: any;
  isVertical: boolean;
  size?: string;
}

// 카드 래퍼 컴포넌트 (props 전달용)
const CardWrapper = (args: CardWrapperProps) => {
  return (
    <div
      style={
        {
          "--card-width": args.isVertical ? "120px" : "312px",
          "--card-height": args.isVertical ? "220px" : "100px",
          "--thumbnail-size": args.isVertical ? "120px" : "100px",
        } as React.CSSProperties
      }
    >
      <Card {...args} />
    </div>
  );
};

// CardWrapper의 타입으로 메타 정의
const meta: Meta<CardWrapperProps> = {
  title: "Components/Card",
  component: CardWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "아이템 정보를 표시하는 카드 컴포넌트입니다. 세로형과 가로형 레이아웃을 지원합니다.",
      },
    },
  },
  argTypes: {
    isVertical: {
      control: "boolean",
      description: "카드의 레이아웃 방향 (true: 세로형, false: 가로형)",
    },
    size: {
      control: "text",
      description: "카드 크기 설정",
    },
    itemInfo: {
      control: "object",
      description: "표시할 아이템 정보",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<CardWrapperProps>; // CardWrapperProps 타입 사용

// Mock 데이터들은 그대로 유지...
const CHIP_STATUS = {
  available: { title: "판매중", color: "blue" },
  reserved: { title: "예약중", color: "orange" },
  sold: { title: "판매완료", color: "gray" },
};

const CHIP_PRICE = {
  sell: { title: "판매", color: "green" },
  exchange: { title: "교환", color: "purple" },
};

const mockItemWithMultiplePrices = {
  thumbnail: "https://via.placeholder.com/120x120",
  title: "맥북 프로 16인치 교환/판매",
  date: "2024-06-07",
  location: "서초구 서초동",
  transactionStatus: "reserved",
  priceInfo: [
    {
      title: "sell" as const,
      value: 2500000,
    },
    {
      title: "exchange" as const,
      value: 2000000,
    },
  ],
};

const mockItemData = {
  thumbnail: "https://via.placeholder.com/120x120",
  title: "아이폰 14 프로 판매합니다",
  date: "2024-06-07",
  location: "강남구 역삼동",
  transactionStatus: "available" as const,
  priceInfo: [
    {
      title: "sell" as const,
      value: 950000,
    },
  ],
};

// 나머지 스토리들...
export const HorizontalDefault: Story = {
  args: {
    itemInfo: mockItemData,
    isVertical: false,
    size: "medium",
  },
};

export const VerticalDefault: Story = {
  args: {
    itemInfo: mockItemData,
    isVertical: true,
    size: "medium",
  },
};

// 카드 비교용 (가로형 vs 세로형) - 수정된 버전
export const LayoutComparison: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <div>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "14px" }}>가로형</h3>
        <CardWrapper {...args} isVertical={false} />
      </div>
      <div>
        <h3 style={{ margin: "0 0 10px 0", fontSize: "14px" }}>세로형</h3>
        <CardWrapper {...args} isVertical={true} />
      </div>
    </div>
  ),
  args: {
    itemInfo: mockItemData,
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "같은 데이터로 가로형과 세로형 레이아웃을 비교해볼 수 있습니다.",
      },
    },
  },
};
