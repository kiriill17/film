import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  return (
    <div className="flex relative h-screen items-center justify-center ">
      <div className="w-full h-screen bg-black">
        <img
          className="h-screen object-cover opacity-25"
          src="https://wallpapers.com/images/hd/poster-background-hlybuowt1whxbh2z.jpg"
          alt=""
        />
      </div>
      <div className="shadow flex absolute h-full w-full items-center justify-center">
        <div className="flex flex-col items-center bg-black/50 p-6 rounded-xl">
          <h1 className="text-xl mb-2">Вход</h1>
          <form>
            <Input type="email" placeholder="Почта" />
            <Input className="mt-2" type="password" placeholder="Пароль" />
            <Button className="w-full mt-4 bg-amber-700">Войти</Button>
          </form>
          <p className="font-light mt-4 text-sm">Еще нет аккаунта?</p>
          <a className="font-light underline  text-amber-700 text-sm" href="/register">
            Создать аккаунт
          </a>
        </div>
      </div>
    </div>
  );
}
