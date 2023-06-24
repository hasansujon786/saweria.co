import {
  BannerTimePreviewBox,
  ColorInput,
  FontInput,
  UrlFooterBox,
} from '@/components/overlays/shared'
import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { BaseCheckbox } from '@/components/ui/checkbox'
import { BaseInput, FormElement, Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { H3, H4 } from '@/components/ui/typography'
import { Play, Plus, Settings, X } from 'lucide-react'

export const SectionVoting = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>Adakan Voting untuk penonton kamu!</p>
        <div className='grid grid-cols-1 gap-3'>
          <H4>Informasi Voting:</H4>

          <div className='flex items-center gap-3'>
            <Label>Nyalakan Voting:</Label>
            <BaseCheckbox className='h-5 w-5' />
          </div>

          <Input label='Judul:' />
          <CreateVotingOptions />

          <div className='grid grid-cols-2 gap-y-1 gap-x-1'>
            <Input label='Tanggal mulai:' defaultValue='06/24/2023' />
            <Input label='Waktu mulai' defaultValue='05:01 PM' />

            <Input label='Tanggal selesai' defaultValue='06/24/2023' />
            <Input label='Waktu selesai' defaultValue='05:01 PM' />
          </div>
          <Button variant='secondary'>Simpan Perubahan Overlay Voting</Button>
        </div>
      </div>

      <H3 className='text-center'>Tidak ada voting yang aktif</H3>

      {/* TODO: place video */}

      <Card>
        <div className='flex items-center mb-2'>
          <H4 className='mr-1'>Tampilan:</H4>
          <IconButton>
            {/* add button hover */}
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              aria-hidden='true'
              focusable='false'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='none'
                stroke='#000'
                stroke-width='2'
                d='M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9'
              ></path>
            </svg>
          </IconButton>
        </div>

        <div className='grid grid-cols-3 gap-x-4 gap-y-4 mt-8'>
          <div className='flex flex-col gap-3'>
            <Label>Tanpa Border:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
          <ColorInput label='Warna Background:' defaultValue='#faae2b' />
          <ColorInput label='Warna Teks:' defaultValue='#333333' />

          <Input label='Tebal Teks:' defaultValue='500' />
          <FontInput label='Font Judul:' />
          <FontInput />
        </div>

        <div className='relative z-0 '>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      {/* // TODO: remove 3rd button */}
      <UrlFooterBox url='https://saweria.co/widgets/vote?streamKey=c1e89a4cda4c630338c854cd9e9c8d74' />
    </div>
  )
}

export const CreateVotingOptions = () => {
  return (
    <FormElement message='Minimum choice of 2 and a maximum of 5'>
      <div className='flex items-center gap-3'>
        <Label>Nyalakan Voting:</Label>
        <IconButton className='border border-input bg-accent p-1'>
          <Plus size={20} />
        </IconButton>
      </div>
      <div className='flex flex-wrap gap-3 mt-2'>
        {[
          'option1',
          'Ipsum dolorem magnam ipsum animi soluta',
          'Ipsum dolorem',
          'Ipsum dolorem magnam ipsum animi soluta! At libero aspernatur libero, Ipsum dolorem magnam ipsum animi soluta! At libero aspernatur libero',
        ].map((opt) => (
          <div
            className='relative border border-input bg-accent py-2 px-3 rounded-md flex items-start'
            key={opt}
          >
            <p className='mr-6'>{opt}</p>

            <div className='absolute top-1.5 right-1'>
              <IconButton className='p-1 hover:bg-destructive'>
                <X size={18} />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </FormElement>
  )
}
