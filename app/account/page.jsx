import AccountMainComp from "@/components/account/accountMain";

const AccountPage = () => {
    return (
        <section className="container mx-auto p-12 flex justify-center items-center">
            <div className="px-8 py-4 rounded-md bg-orange-500 text-white">
                حساب کاربری
            </div>
            <AccountMainComp/>
        </section>
    );
}

export default AccountPage;