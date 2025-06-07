import type { Meta, StoryObj } from "@storybook/react";
import { createElement } from "react";
import { Accordion } from "../../../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "접고 펼칠 수 있는 드롭다운 형태의 Accordion 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    buttonTitle: {
      control: "text",
      description: "버튼에 표시될 텍스트",
    },
    children: {
      control: false,
      description: "드롭다운 내부에 표시될 콘텐츠",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    buttonTitle: "옵션 선택",
    children: createElement(
      "div",
      {},
      createElement("li", {}, "메뉴 1"),
      createElement("li", {}, "메뉴 2"),
      createElement("li", {}, "메뉴 3")
    ),
  },
};

// 긴 텍스트가 있는 메뉴
export const WithLongText: Story = {
  args: {
    buttonTitle: "카테고리 선택",
    children: createElement(
      "div",
      {},
      createElement("li", {}, "프론트엔드 개발"),
      createElement("li", {}, "백엔드 개발"),
      createElement("li", {}, "데이터베이스 관리"),
      createElement("li", {}, "UI/UX 디자인"),
      createElement("li", {}, "프로젝트 관리")
    ),
  },
};

// 단일 메뉴 아이템
export const SingleItem: Story = {
  args: {
    buttonTitle: "단일 옵션",
    children: createElement("li", {}, "유일한 선택지"),
  },
};

// 많은 메뉴 아이템
export const ManyItems: Story = {
  args: {
    buttonTitle: "전체 메뉴",
    children: createElement(
      "div",
      {},
      createElement("li", {}, "홈"),
      createElement("li", {}, "소개"),
      createElement("li", {}, "서비스"),
      createElement("li", {}, "포트폴리오"),
      createElement("li", {}, "블로그"),
      createElement("li", {}, "팀"),
      createElement("li", {}, "채용"),
      createElement("li", {}, "연락처"),
      createElement("li", {}, "고객지원"),
      createElement("li", {}, "FAQ")
    ),
  },
};

// 링크가 포함된 메뉴
export const WithLinks: Story = {
  args: {
    buttonTitle: "바로가기",
    children: createElement(
      "div",
      {},
      createElement(
        "li",
        {},
        createElement(
          "a",
          {
            href: "#home",
            style: { textDecoration: "none", color: "inherit" },
          },
          "홈페이지"
        )
      ),
      createElement(
        "li",
        {},
        createElement(
          "a",
          {
            href: "#about",
            style: { textDecoration: "none", color: "inherit" },
          },
          "회사소개"
        )
      ),
      createElement(
        "li",
        {},
        createElement(
          "a",
          {
            href: "#contact",
            style: { textDecoration: "none", color: "inherit" },
          },
          "연락처"
        )
      )
    ),
  },
};

// 버튼 텍스트가 긴 경우
export const LongButtonTitle: Story = {
  args: {
    buttonTitle: "매우 긴 버튼 텍스트가 들어간 경우",
    children: createElement(
      "div",
      {},
      createElement("li", {}, "옵션 1"),
      createElement("li", {}, "옵션 2"),
      createElement("li", {}, "옵션 3")
    ),
  },
};

// 인터랙티브 스토리 (Playground)
export const Playground: Story = {
  args: {
    buttonTitle: "설정",
    children: createElement(
      "div",
      {},
      createElement("li", {}, "계정 관리"),
      createElement("li", {}, "알림 설정"),
      createElement("li", {}, "개인정보 보호"),
      createElement("li", {}, "언어 설정"),
      createElement("li", {}, "로그아웃")
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "이 스토리에서는 Controls 패널을 통해 buttonTitle을 직접 수정해볼 수 있습니다.",
      },
    },
  },
};
