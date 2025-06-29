import PaymentGatewayComp from "@/components/paymentGatewayComp";

const PaymentGateway = async ({searchParams}) => {
  const resolvedParams = await searchParams;
  console.log(resolvedParams)

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 backdrop-blur-sm">
      <PaymentGatewayComp resnumber={resolvedParams.Authority}/>
    </section>
  );
}

export default PaymentGateway;