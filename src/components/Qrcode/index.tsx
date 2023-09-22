import QRCode from 'react-qr-code';

interface QrcodeProps {
	children?: React.ReactNode;
	link: string;
	code: number;
}

function Qrcode({ children, link, code }: QrcodeProps) {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-row space-x-10 justify-center">
				<QRCode value={link} size={80} fgColor="#DC6A1D" />
				<p className="text-center text-lg mt-8 text-triider-primary-orange-dark font-bold">
					{code}
				</p>
			</div>
			<p className="text-center w-3/4  text-sm mt-2 text-triider-primary-orange-dark font-bold">
				Use seu celular para votar
			</p>
			<p className="text-center w-3/4  text-xs mt-2 text-triider-primary-orange-dark">
				No app do Planline, escaneie o QR code, ou digite o código numérico.
			</p>
			{children}
		</div>
	);
}

export default Qrcode;
