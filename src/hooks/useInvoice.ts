import { useMemo, useState } from 'react';

interface Props {
  cart: any[];
  type: 'concert' | 'dining';
  taxPercent: number;
  serviceChargesPercent: number;
}

export function useInvoice({
  cart,
  type = 'concert',
  taxPercent,
  serviceChargesPercent,
}: Props): {
  subTotal: number;
  total: number;
  serviceCharges: number;
  serviceChargesPercent: number;
  tax: number;
  taxPercent: number;
} {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [serviceCharges, setServiceCharges] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  useMemo(() => {
    if (type === 'concert') {
      // * Getting Sub Total Value
      let subTotalResult = 0;
      cart.forEach((c) => {
        subTotalResult += c.ticketRow.price;
      });
      setSubTotal(subTotalResult);

      // * Getting Tax Value
      let taxResult = 0;
      taxResult = (subTotalResult * taxPercent) / 100;
      setTax(taxResult);

      // * Getting Service Charge Value
      let serviceChargesResult = 0;
      serviceChargesResult = (subTotalResult * serviceChargesPercent) / 100;
      setServiceCharges(serviceChargesResult);

      // * Getting Total Value
      setTotal(subTotalResult + taxResult + serviceChargesResult);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return {
    subTotal,
    total,
    serviceCharges,
    serviceChargesPercent,
    tax,
    taxPercent,
  };
}
