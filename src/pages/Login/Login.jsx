import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { EyeOff } from "lucide-react";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div
      className="text-white"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d0d0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingInline: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <Logo/>
        <h1 className="text-3xl font-semibold" style={{marginTop:25}}>Bienvenue</h1>
        <p className="text-sm text-gray-300 text-center">
          Rejoignez l’aventure et testez vos connaissances sur la santé sexuelle
        </p>
      </div>

      <Card
        className="border-none text-white"
        style={{
          width: "100%",
          maxWidth: "50%",
          padding: "30px",
          backgroundColor: "#1a1a1d",
          borderRadius: "12px",
        }}
      >
        <CardContent className="flex flex-col gap-6">
          <div>
            <label className="text-sm">Adresse email</label>
            <Input
              placeholder="Exemple@mail.com"
              className="border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0 h-14"
              style={{ padding: "10px", marginTop: "5px", backgroundColor:"#5A5E66", borderRadius:12, color:'white'}}
            />
          </div>

          <div>
            <label className="text-sm">Mot de passe</label>
            <div className="relative" style={{ marginTop: "0.5rem" }}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Votre mot de passe"
                className="border-none text-white pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 h-14"
                style={{ padding: "10px", marginTop: "5px", backgroundColor:"#5A5E66" , borderRadius:12, color:'white', display:"flex", alignItems:'center'}}
              />
              <EyeOff
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
                className="absolute right-3 top-3 h-5 w-5 text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="border-gray-400" />
              <label htmlFor="remember">Rappelez moi</label>
            </div>
            <Link to='#' className="text-xs text-gray-300 hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>

          <Button className="w-full bg-[#5a42f5] hover:bg-[#4a34d6] text-white font-semibold h-12">
            Se connecter
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <Button
            variant="outline"
            className="w-full bg-[#f0f2f5] text-black flex items-center gap-2 hover:bg-white h-12"
          >
            <img
              src="../../assets/google.png"
              className="w-5 h-5"
            />
            Continue avec Google
          </Button>

          <p className="text-center text-sm text-gray-300">
            Pas de compte ?{" "}
            <Link to='#'className="text-white font-semibold hover:underline">
              S’inscrire
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
