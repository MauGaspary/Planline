import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useFirebase } from "../../hooks/useFirebase";
import { onValue, ref, set } from "firebase/database";

type Session = {
  sprint: number
}

type Sessions = {
  [key: string]: Session
}

function Home() {
  const firebase = useFirebase()
  const [qrValue, setQrValue] = useState<string>("")
  const [sessions, setSessions] = useState<Sessions>({})

  const starCountRef = ref(firebase, 'sessions/');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setSessions(data)
    });
  }, []);

  const createSession = () => {
    set(ref(firebase, 'sessions/' + qrValue), {
      sprint: Math.floor(Math.random() * 1000),
    });
  }

  const deleteSession = (sessionId: number) => {
    set(ref(firebase, 'sessions/' + sessionId), null);
  }

	return (
		<>
			<div className="bg-gray-900">
				<h1 className="text-center text-triider-primary-orange1">Home!</h1>
        <QRCode value={qrValue} />
        <input type="text" onChange={(e) => setQrValue(e.target.value)} />
        <button onClick={createSession}>Create Session</button>
        <ul>
          {sessions && Object.keys(sessions).map((key) => (
            <li key={key} className="text-white">{key}
              <button onClick={() => deleteSession(+key)}>del</button>
            </li>
          ))}
        </ul>
			</div>
		</>
	);
}

export default Home;
