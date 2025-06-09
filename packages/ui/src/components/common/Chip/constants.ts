export const CHIP_STATUS = {
  reserved: { title: '예약중', color: 'rose' },
  completed: { title: '거래완료', color: 'neutral' },
  onSale: { title: '판매중', color: 'teal' },
} as const;

export const CHIP_PRICE = {
  currentOffer: { title: '현재제시가', color: 'neutral' },
  buyNowPrice: { title: '즉시거래가', color: 'teal' },
} as const;
