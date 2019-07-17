using System;
using System.Text;
using System.IO;
using System.Text.RegularExpressions;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {

            ReadWrite(CapsFirst, args[0],args[1]);
        }

        static void ReadWrite(StringModifier modifier, string reader, string writer)
        {
            StreamReader input = new StreamReader(reader);
            StreamWriter output = new StreamWriter(writer);
            string line;
            while((line = input.ReadLine()) != null)
            {
                //Console.WriteLine(CapsFirst(line));
                output.WriteLine(modifier(line));
            }
            input.Close();
            output.Close();
        }
        
        
        
        delegate string StringModifier(string input);

        static string RegexCapsFirst(string input)
        {
            return Regex.Replace(" "+input, @"(?<white>\s+)(?<cha>.)", match => 
                { return match.Groups["white"].Value + match.Groups["cha"].Value.ToUpper();}).Substring(1);
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
                    builder[i] = char.ToUpperInvariant(builder[i]);
                }

                if (isWhiteSpace(builder[i]))
                {
                    CapsNext = true;
                }
            }

            return builder.ToString();
        }

        static bool isWhiteSpace(char input)
        {
            return input == ' ' || input == '\n';
        }
        
    }
}
