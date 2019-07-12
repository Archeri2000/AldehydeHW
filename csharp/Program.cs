using System;
using System.Text;
using System.IO;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            StreamReader input = new StreamReader(args[0]);
            StreamWriter output = new StreamWriter(args[1]);
            string line;
            while((line = input.ReadLine()) != null)
            {
                Console.WriteLine(CapsFirst(line));
                output.WriteLine(CapsFirst(line));
            }
            input.Close();
            output.Close();
        }

        static string CapsFirst(string input)
        {
            StringBuilder builder = new StringBuilder(input);
            bool CapsNext = true;
            for (int i = 0; i < builder.Length; i++)
            {
                if (CapsNext)
                {
                    CapsNext = false;
                    if (builder[i] >= 97 && builder[i] <= 122)
                    {
                        builder[i] = (char)(builder[i] - 32);
                    }
                }

                if (builder[i] == ' ' || builder[i] == '\n')
                {
                    CapsNext = true;
                }
            }

            return builder.ToString();
        }
    }
}
