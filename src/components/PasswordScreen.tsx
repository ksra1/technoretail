import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

interface PasswordScreenProps {
  onAuthenticated: () => void;
}

export const PasswordScreen = ({ onAuthenticated }: PasswordScreenProps) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'adobe') {
      onAuthenticated();
      toast.success('Access granted');
    } else {
      toast.error('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4">
      <Card className="w-full max-w-md border-primary/20 shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Access Protected</CardTitle>
          <CardDescription>
            Please enter the password to view the TechnoRetail Transformation Hub
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="text-center text-lg tracking-widest"
              />
            </div>
            <Button type="submit" className="w-full text-lg h-12">
              Unlock Hub
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
