const GeminiChat = () =>{

    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
  
    const API_KEY = "AIzaSyA-RiB6nvzquymNr4YPUXcfMY3LQd2pxJ4";
    useEffect(() => {
      const startChat = async () => {
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "hello! ";
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log(text);
        showMessage({
          message: "Welcome to Gemini Chat 🤖",
          description: text,
          type: "info",
          icon: "info",
          duration: 2000,
        });
        setMessages([
          {
            text,
            user: false,
          },
        ]);
      };
      //function call
      startChat();
    }, []);
  
    
  }
  