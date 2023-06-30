import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { H3, H4 } from '@/components/ui/typography'

const qurstions = [
  {
    sectiontitle: 'Tentang Saweria',
    questions: [
      {
        question: 'Saweria itu apa sih?',
        answer: [
          'Saweria adalah sebuah layanan yang membantu KAMU untuk mendapatkan dukungan finansial dari para penikmat karyamu. Dukungan ini bersifat sekali putus (bukan langganan) dan dapat dilengkapi fitur-fitur yang dapat menggugah minat pendukungmu.',
          'Saweria bukan merupakan platform untuk live streaming. Kamu bisa live dengan menggunakan platform live streaming yang sudah ada seperti Youtube, Twitch, Facebook Live, NimoTV, dll.',
        ],
      },
      {
        question: 'Apakah saya dapat menggunakan Saweria?',
        answer: [
          'Sejauh ini banyak mereka yang streaming sambil main game, tutorial membuat musik, tutorial menggambar, tutorial mengedit foto/video, DJ show, talk show, ngobrol-ngobrol santai, sampai karaoke-an berdasarkan request para penontonnya. Saweria sangat terbuka dengan ide-ide kalian dalam menggunakan layanan kami. Tetapi tentu saja selama semua ini sesuai dengan hukum yang berlaku di Indonesia ya (silahkan baca Syarat & Ketentuan Saweria untuk lebih detailnya di https://saweria.co/terms).',
        ],
      },
    ],
  },
  {
    sectiontitle: 'Mengirimkan/Menerima Dukungan',
    questions: [
      {
        question: 'Kok barcode Saweria tidak dapat di scan?',
        answer: [
          'Barcode Saweria bukan QRIS sehingga tidak dapat di scan menggunakan aplikasi scan yang ada pada e-wallet (Gopay, OVO, Dana, dll). Silahkan scan QR code Saweria menggunakan aplikasi kamera / barcode scanner. Setelah itu, kamu akan diarahkan menuju halaman donasi untuk dapat memilih moda pembayaran yang kamu inginkan.',
        ],
      },
    ],
  },
]

export default function Faq() {
  return (
    <div>
      <div className='pt-6'>
        <H3>Frequently Asked Questions:</H3>
      </div>
      {qurstions.map((section) => (
        <div className='mt-12'>
          <H4 className='border-b border-input pb-2'>{section.sectiontitle}</H4>
          <Accordion type='single' collapsible>
            {section.questions.map((item) => (
              <AccordionItem value={item.question}>
                <AccordionTrigger className='font-bold text-lg'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer.map((ans) => (
                    <p className='mt-4 text-base max-w-lg pl-4'>{ans}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
