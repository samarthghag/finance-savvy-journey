
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FinancialEducation from '@/components/FinancialEducation';
import AnimatedTransition from '@/components/AnimatedTransition';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const Education = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          navigate('/auth');
          return;
        }
        setAuthenticated(true);
      } catch (error) {
        console.error('Error checking authentication:', error);
        toast({
          title: "Authentication Error",
          description: "Please sign in to access this page",
          variant: "destructive"
        });
        navigate('/auth');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setAuthenticated(!!session);
        if (!session) {
          navigate('/auth');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AnimatedTransition>
        <main className="pt-24 pb-16">
          <div className="content-container">
            <FinancialEducation />
          </div>
        </main>
      </AnimatedTransition>
    </div>
  );
};

export default Education;
