import type { Meta, StoryObj } from "@storybook/react";
import { ProfileImgStyle } from "../../../components/Profile/ProfileImg/styles";
import { ImgSizeKey, Variant } from "../../../components/Profile/ProfileImg/type";

// 샘플 이미지 URL들
const SAMPLE_IMAGES = {
  person1:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  person2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  person3:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  landscape:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
};

const meta: Meta<typeof ProfileImgStyle> = {
  title: "Components/ProfileImg",
  component: ProfileImgStyle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "프로필 이미지를 표시하는 컴포넌트입니다. 다양한 크기와 원형/사각형 변형을 지원합니다.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "xxl"] as ImgSizeKey[],
      description: "이미지 크기를 설정합니다.",
      table: {
        type: { summary: "ImgSizeKey" },
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      control: { type: "select" },
      options: ["circle", "rounded"] as Variant[],
      description: "이미지 모양을 설정합니다.",
      table: {
        type: { summary: "Variant" },
        defaultValue: { summary: "circle" },
      },
    },
    imgUrl: {
      control: { type: "text" },
      description: "표시할 이미지의 URL입니다.",
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    size: "md",
    variant: "circle",
    imgUrl: SAMPLE_IMAGES.person1,
  },
};

// 크기별 변형
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="xs" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>XS (24px)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="sm" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>SM (32px)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="md" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>MD (44px)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>LG (56px)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="xl" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>XL (76px)</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="xxl" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>XXL (90px)</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "모든 사이즈 옵션을 보여주는 예시입니다.",
      },
    },
  },
};

// 변형별 비교 (원형 vs 둥근 사각형)
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.person2} />
        <p style={{ margin: "8px 0 0 0", fontSize: "14px", color: "#666" }}>Circle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="rounded" imgUrl={SAMPLE_IMAGES.person2} />
        <p style={{ margin: "8px 0 0 0", fontSize: "14px", color: "#666" }}>Rounded</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "원형(circle)과 둥근 사각형(rounded) 변형을 비교합니다.",
      },
    },
  },
};

// 다양한 이미지 타입
export const DifferentImages: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>Person 1</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.person2} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>Person 2</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.person3} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>Person 3</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.landscape} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>Landscape</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 이미지 타입으로 테스트한 예시입니다.",
      },
    },
  },
};

// 조합 예시
export const Combinations: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="xs" variant="circle" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>XS Circle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="xs" variant="rounded" imgUrl={SAMPLE_IMAGES.person1} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>XS Rounded</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="sm" variant="circle" imgUrl={SAMPLE_IMAGES.person2} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>SM Circle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="sm" variant="rounded" imgUrl={SAMPLE_IMAGES.person2} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>SM Rounded</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="md" variant="circle" imgUrl={SAMPLE_IMAGES.person3} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>MD Circle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="md" variant="rounded" imgUrl={SAMPLE_IMAGES.person3} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>MD Rounded</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="circle" imgUrl={SAMPLE_IMAGES.landscape} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>LG Circle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <ProfileImgStyle size="lg" variant="rounded" imgUrl={SAMPLE_IMAGES.landscape} />
        <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#666" }}>LG Rounded</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 크기와 변형의 조합을 보여주는 예시입니다.",
      },
    },
  },
};

// 에러 케이스 (잘못된 이미지 URL)
export const BrokenImage: Story = {
  args: {
    size: "lg",
    variant: "circle",
    imgUrl: "https://invalid-url-that-does-not-exist.jpg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "이미지 로드에 실패했을 때의 모습입니다. 배경색이나 기본 이미지를 보여주는 fallback 처리를 고려해볼 수 있습니다.",
      },
    },
  },
};

// 대화형 플레이그라운드
export const Playground: Story = {
  args: {
    size: "lg",
    variant: "circle",
    imgUrl: SAMPLE_IMAGES.person1,
  },
  parameters: {
    docs: {
      description: {
        story: "모든 props를 자유롭게 조정해볼 수 있는 플레이그라운드입니다.",
      },
    },
  },
};
