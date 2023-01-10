import MicrosoftLogin from "react-microsoft-login";

export default function LoginPage() {
    const authHandler = (err: any, data: any) => {
        console.log(err, data);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 lg:w-1/3 m-20 rounded-lg dark:bg-gray-900 shadow-lg">
                <div className="w-full text-center">
                    <h1 className="text-4xl dark:text-white font-semibold m-8">Login</h1>

                    <form action="/myitems" method="get">
                        <div className="text-left w-1/2 inline-block">

                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="email" className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@doemail.com" required />
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                            <input type="submit" value="Submit" className="w-full p-2 bg-blue-700 rounded-lg dark:text-white" />
                        </div>
                    </form>

                    <br />
                    <p className="mb-3 font-light dark:text-white opacity-40">Or sign in using</p>

                    <MicrosoftLogin clientId={"Placeholder"} authCallback={authHandler} />
                    <div className="w-1/2 bg-white block m-4 mb-8 p-4 ml-auto mr-auto rounded-sm"> <img alt="microsoft logo" className="w-4 inline mr-4" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />Sign in with Microsoft</div>

                </div>
            </div>
        </div>
    )
}