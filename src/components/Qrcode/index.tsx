import QRCode from 'react-qr-code';

interface QrcodeProps {
	link: string;
	code: string;
}

function Qrcode({ link, code }: QrcodeProps) {
	return (
		<div className="flex flex-col items-start w-48 h-42">
			<div className="flex flex-row space-x-12">
				<QRCode value={link} size={88} fgColor="#30626B" />
				<p className="text-lg mt-8 text-triider-helper-green1 tracking-access-number-code font-bold">
					{code}
				</p>
			</div>
			<p className="text-left pt-3 text-sm  text-triider-helper-green1 font-bold">
				Use seu celular para votar
			</p>
			<p className="text-left  text-xs text-triider-helper-green1">
				No app do Planline, escaneie o QR code, ou digite o código numérico.
			</p>
		</div>
	);
}

export default Qrcode;
